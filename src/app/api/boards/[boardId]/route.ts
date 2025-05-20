import { NextResponse } from 'next/server';
import { getBoard, updateBoard, deleteBoard } from '@/lib/boardStore';

export async function GET(
  _request: Request,
  { params }: { params: { boardId: string } }
) {
  const board = await getBoard(params.boardId);
  if (!board) return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json(board);
}

export async function PUT(
  request: Request,
  { params }: { params: { boardId: string } }
) {
  const board = await getBoard(params.boardId);
  if (!board) return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  const body = await request.json();
  board.name = body.name ?? board.name;
  if (body.columns) board.columns = body.columns;
  const updated = await updateBoard(board);
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { boardId: string } }
) {
  const deleted = await deleteBoard(params.boardId);
  if (!deleted) return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json({ success: true });
}
