import { NextRequest, NextResponse } from 'next/server';
import { getImages, getImageIterations, moveImageToFolder, deleteImage } from '@/lib/imageStore';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folderId = searchParams.get('folderId');
    const parentImageId = searchParams.get('parentImageId');

    if (parentImageId) {
      const iterations = await getImageIterations(parentImageId);
      return NextResponse.json({ images: iterations });
    }

    // folderId=null means unfiled, folderId=undefined means all
    if (folderId === 'null') {
      const images = await getImages(null);
      return NextResponse.json({ images });
    } else if (folderId) {
      const images = await getImages(folderId);
      return NextResponse.json({ images });
    }

    const images = await getImages();
    return NextResponse.json({ images });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to load images';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageId, folderId } = body as { imageId: string; folderId: string | null };

    if (!imageId) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    const image = await moveImageToFolder(imageId, folderId);
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json({ image });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to move image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const imageId = searchParams.get('imageId');

    if (!imageId) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
    }

    const deleted = await deleteImage(imageId);
    if (!deleted) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to delete image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
