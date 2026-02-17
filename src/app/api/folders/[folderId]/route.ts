import { NextRequest, NextResponse } from 'next/server';
import { getFolder, updateFolder, deleteFolder, getImages } from '@/lib/imageStore';

export async function GET(
  _request: NextRequest,
  { params }: { params: { folderId: string } }
) {
  try {
    const folder = await getFolder(params.folderId);
    if (!folder) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
    }
    const images = await getImages(params.folderId);
    return NextResponse.json({ folder, images });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to load folder';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { folderId: string } }
) {
  try {
    const body = await request.json();
    const { name } = body as { name: string };

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Folder name is required' }, { status: 400 });
    }

    const folder = await updateFolder(params.folderId, name.trim());
    if (!folder) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
    }

    return NextResponse.json({ folder });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to update folder';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { folderId: string } }
) {
  try {
    const deleted = await deleteFolder(params.folderId);
    if (!deleted) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to delete folder';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
