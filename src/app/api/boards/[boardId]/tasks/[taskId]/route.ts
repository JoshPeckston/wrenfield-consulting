import { NextResponse } from 'next/server';
import { getBoard, updateTask, deleteTask } from '@/lib/boardStore';

export async function PUT(
  request: Request,
  { params }: { params: { boardId: string; taskId: string } }
) {
  const board = await getBoard(params.boardId);
  if (!board) return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  const body = await request.json();
  const updated = await updateTask(board.id, params.taskId, body);
  if (!updated) return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { boardId: string; taskId: string } }
) {
  const deleted = await deleteTask(params.boardId, params.taskId);
  if (!deleted) return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  return NextResponse.json({ success: true });
}
