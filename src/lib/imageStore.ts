import fs from 'fs/promises';
import path from 'path';

export interface GeneratedImage {
  id: string;
  folderId: string | null;
  prompt: string;
  parentImageId: string | null;
  iterationNumber: number;
  model: string;
  fileName: string;
  mimeType: string;
  width: number;
  height: number;
  createdAt: string;
}

export interface ImageFolder {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ImageStoreData {
  folders: ImageFolder[];
  images: GeneratedImage[];
}

const dataPath = path.join(process.cwd(), 'src/data/images.json');
const imagesDir = path.join(process.cwd(), 'public/generated-images');

async function ensureDataFile() {
  try {
    await fs.access(dataPath);
  } catch {
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify({ folders: [], images: [] }, null, 2));
  }
}

async function ensureImagesDir() {
  try {
    await fs.access(imagesDir);
  } catch {
    await fs.mkdir(imagesDir, { recursive: true });
  }
}

async function loadData(): Promise<ImageStoreData> {
  await ensureDataFile();
  const raw = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
}

async function saveData(data: ImageStoreData) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

// Folder operations
export async function getFolders(): Promise<ImageFolder[]> {
  const data = await loadData();
  return data.folders;
}

export async function getFolder(id: string): Promise<ImageFolder | undefined> {
  const data = await loadData();
  return data.folders.find((f) => f.id === id);
}

export async function createFolder(folder: ImageFolder): Promise<ImageFolder> {
  const data = await loadData();
  data.folders.push(folder);
  await saveData(data);
  return folder;
}

export async function updateFolder(id: string, name: string): Promise<ImageFolder | undefined> {
  const data = await loadData();
  const index = data.folders.findIndex((f) => f.id === id);
  if (index === -1) return undefined;
  data.folders[index].name = name;
  data.folders[index].updatedAt = new Date().toISOString();
  await saveData(data);
  return data.folders[index];
}

export async function deleteFolder(id: string): Promise<boolean> {
  const data = await loadData();
  const index = data.folders.findIndex((f) => f.id === id);
  if (index === -1) return false;
  data.folders.splice(index, 1);
  // Move images in this folder to unfiled
  data.images.forEach((img) => {
    if (img.folderId === id) img.folderId = null;
  });
  await saveData(data);
  return true;
}

// Image operations
export async function getImages(folderId?: string | null): Promise<GeneratedImage[]> {
  const data = await loadData();
  if (folderId === undefined) return data.images;
  return data.images.filter((img) => img.folderId === folderId);
}

export async function getImage(id: string): Promise<GeneratedImage | undefined> {
  const data = await loadData();
  return data.images.find((img) => img.id === id);
}

export async function getImageIterations(parentImageId: string): Promise<GeneratedImage[]> {
  const data = await loadData();
  return data.images
    .filter((img) => img.parentImageId === parentImageId || img.id === parentImageId)
    .sort((a, b) => a.iterationNumber - b.iterationNumber);
}

export async function createImage(image: GeneratedImage): Promise<GeneratedImage> {
  const data = await loadData();
  data.images.push(image);
  await saveData(data);
  return image;
}

export async function moveImageToFolder(imageId: string, folderId: string | null): Promise<GeneratedImage | undefined> {
  const data = await loadData();
  const index = data.images.findIndex((img) => img.id === imageId);
  if (index === -1) return undefined;
  data.images[index].folderId = folderId;
  await saveData(data);
  return data.images[index];
}

export async function deleteImage(id: string): Promise<boolean> {
  const data = await loadData();
  const index = data.images.findIndex((img) => img.id === id);
  if (index === -1) return false;
  const image = data.images[index];
  // Delete the file
  try {
    await fs.unlink(path.join(imagesDir, image.fileName));
  } catch {
    // File may already be deleted
  }
  data.images.splice(index, 1);
  await saveData(data);
  return true;
}

export async function saveImageFile(fileName: string, buffer: Buffer): Promise<void> {
  await ensureImagesDir();
  await fs.writeFile(path.join(imagesDir, fileName), buffer);
}
