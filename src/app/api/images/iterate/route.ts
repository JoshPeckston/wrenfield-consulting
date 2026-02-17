import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';
import { iterateImage, DEFAULT_MODEL, ImageModel } from '@/lib/geminiClient';
import { createImage, getImage, getImageIterations, saveImageFile } from '@/lib/imageStore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, parentImageId, model } = body as {
      prompt: string;
      parentImageId: string;
      model?: ImageModel;
    };

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    if (!parentImageId) {
      return NextResponse.json({ error: 'Parent image ID is required' }, { status: 400 });
    }

    const parentImage = await getImage(parentImageId);
    if (!parentImage) {
      return NextResponse.json({ error: 'Parent image not found' }, { status: 404 });
    }

    // Read the parent image file
    const imagePath = path.join(process.cwd(), 'public/generated-images', parentImage.fileName);
    const imageBuffer = await fs.readFile(imagePath);
    const imageBase64 = imageBuffer.toString('base64');

    const selectedModel = model || DEFAULT_MODEL;
    const result = await iterateImage(prompt.trim(), imageBase64, parentImage.mimeType, selectedModel);

    // Find the root image for iteration chain
    const rootImageId = parentImage.parentImageId || parentImage.id;
    const iterations = await getImageIterations(rootImageId);
    const nextIteration = iterations.length;

    const imageId = uuidv4();
    const ext = result.mimeType === 'image/jpeg' ? 'jpg' : 'png';
    const fileName = `${imageId}.${ext}`;

    const buffer = Buffer.from(result.imageData, 'base64');
    await saveImageFile(fileName, buffer);

    const imageRecord = await createImage({
      id: imageId,
      folderId: parentImage.folderId,
      prompt: prompt.trim(),
      parentImageId: rootImageId,
      iterationNumber: nextIteration,
      model: selectedModel,
      fileName,
      mimeType: result.mimeType,
      width: 1024,
      height: 1024,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      image: imageRecord,
      text: result.text || null,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to iterate image';
    console.error('Image iteration error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
