import fs from 'fs/promises';
import path from 'path';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
}

export interface Board {
  id: string;
  name: string;
  columns: string[];
  tasks: Task[];
}

const dataPath = path.join(process.cwd(), 'src/data/boards.json');

async function ensureDataFile() {
  try {
    await fs.access(dataPath);
  } catch (err) {
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify({ boards: [] }, null, 2));
  }
}

async function loadData(): Promise<{ boards: Board[] }> {
  await ensureDataFile();
  const raw = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
}

async function saveData(data: { boards: Board[] }) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

export async function getBoards(): Promise<Board[]> {
  const data = await loadData();
  return data.boards;
}

export async function getBoard(id: string): Promise<Board | undefined> {
  const data = await loadData();
  return data.boards.find((b) => b.id === id);
}

export async function createBoard(board: Board): Promise<Board> {
  const data = await loadData();
  data.boards.push(board);
  await saveData(data);
  return board;
}

export async function updateBoard(board: Board): Promise<Board | undefined> {
  const data = await loadData();
  const index = data.boards.findIndex((b) => b.id === board.id);
  if (index === -1) return undefined;
  data.boards[index] = board;
  await saveData(data);
  return board;
}

export async function deleteBoard(id: string): Promise<boolean> {
  const data = await loadData();
  const index = data.boards.findIndex((b) => b.id === id);
  if (index === -1) return false;
  data.boards.splice(index, 1);
  await saveData(data);
  return true;
}

export async function addTask(boardId: string, task: Task): Promise<Task | undefined> {
  const board = await getBoard(boardId);
  if (!board) return undefined;
  board.tasks.push(task);
  await updateBoard(board);
  return task;
}

export async function updateTask(
  boardId: string,
  taskId: string,
  updates: Partial<Task>
): Promise<Task | undefined> {
  const board = await getBoard(boardId);
  if (!board) return undefined;
  const tIndex = board.tasks.findIndex((t) => t.id === taskId);
  if (tIndex === -1) return undefined;
  board.tasks[tIndex] = { ...board.tasks[tIndex], ...updates };
  await updateBoard(board);
  return board.tasks[tIndex];
}

export async function deleteTask(boardId: string, taskId: string): Promise<boolean> {
  const board = await getBoard(boardId);
  if (!board) return false;
  const tIndex = board.tasks.findIndex((t) => t.id === taskId);
  if (tIndex === -1) return false;
  board.tasks.splice(tIndex, 1);
  await updateBoard(board);
  return true;
}
