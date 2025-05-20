import { NextResponse } from 'next/server';
import {
  getBoard,
  addTask,
  Task,
} from '@/lib/boardStore';
import crypto from 'crypto';

export async function GET(
  _request: Request,
  { params }: { params: { boardId: string } }
) {
  const board = await getBoard(params.boardId);
  if (!board) return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json({ tasks: board.tasks });
}

export async function POST(
  request: Request,
  { params }: { params: { boardId: string } }
) {
  const board = await getBoard(params.boardId);
  if (!board) return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  const body = await request.json();
  const task: Task = {
    id: crypto.randomUUID(),
    title: body.title ?? 'Untitled Task',
    description: body.description ?? '',
    status: body.status ?? board.columns[0] ?? 'todo',
  };
  await addTask(board.id, task);
  return NextResponse.json(task, { status: 201 });
}
