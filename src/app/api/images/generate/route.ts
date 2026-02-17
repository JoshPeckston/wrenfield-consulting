import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { generateImage, DEFAULT_MODEL, ImageModel } from '@/lib/geminiClient';
import { createImage, saveImageFile } from '@/lib/imageStore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, model, folderId } = body as {
      prompt: string;
      model?: ImageModel;
      folderId?: string | null;
    };

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const selectedModel = model || DEFAULT_MODEL;
    const result = await generateImage(prompt.trim(), selectedModel);

    const imageId = uuidv4();
    const ext = result.mimeType === 'image/jpeg' ? 'jpg' : 'png';
    const fileName = `${imageId}.${ext}`;

    const buffer = Buffer.from(result.imageData, 'base64');
    await saveImageFile(fileName, buffer);

    const imageRecord = await createImage({
      id: imageId,
      folderId: folderId || null,
      prompt: prompt.trim(),
      parentImageId: null,
      iterationNumber: 0,
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
    const message = error instanceof Error ? error.message : 'Failed to generate image';
    console.error('Image generation error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
