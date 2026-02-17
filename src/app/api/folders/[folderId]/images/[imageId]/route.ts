import { NextRequest, NextResponse } from 'next/server';
import { moveImageToFolder, deleteImage } from '@/lib/imageStore';

export async function PUT(
  request: NextRequest,
  { params }: { params: { folderId: string; imageId: string } }
) {
  try {
    const image = await moveImageToFolder(params.imageId, params.folderId);
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }
    return NextResponse.json({ image });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to move image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { folderId: string; imageId: string } }
) {
  try {
    const deleted = await deleteImage(params.imageId);
    if (!deleted) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to delete image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
