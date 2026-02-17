import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getFolders, createFolder } from '@/lib/imageStore';

export async function GET() {
  try {
    const folders = await getFolders();
    return NextResponse.json({ folders });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to load folders';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body as { name: string };

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Folder name is required' }, { status: 400 });
    }

    const now = new Date().toISOString();
    const folder = await createFolder({
      id: uuidv4(),
      name: name.trim(),
      createdAt: now,
      updatedAt: now,
    });

    return NextResponse.json({ folder }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create folder';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
