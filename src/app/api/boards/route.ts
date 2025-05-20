import { NextResponse } from 'next/server';
import { createBoard, getBoards, Board } from '@/lib/boardStore';
import crypto from 'crypto';

export async function GET() {
  const boards = await getBoards();
  return NextResponse.json({ boards });
}

export async function POST(request: Request) {
  const body = await request.json();
  const name = body.name || 'Untitled Board';
  const columns = body.columns || ['todo', 'in-progress', 'done'];

  const board: Board = {
    id: crypto.randomUUID(),
    name,
    columns,
    tasks: [],
  };

  await createBoard(board);
  return NextResponse.json(board, { status: 201 });
}
