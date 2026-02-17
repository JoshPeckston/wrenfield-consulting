'use client';

import { useState, useEffect, useCallback } from 'react';
import FolderSidebar from '@/components/image-studio/FolderSidebar';
import PromptInput from '@/components/image-studio/PromptInput';
import ImageGrid from '@/components/image-studio/ImageGrid';
import ImageViewer from '@/components/image-studio/ImageViewer';

interface Folder {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ImageItem {
  id: string;
  fileName: string;
  prompt: string;
  iterationNumber: number;
  parentImageId: string | null;
  folderId: string | null;
  model: string;
  createdAt: string;
}

export default function ImageStudioPage() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [allImages, setAllImages] = useState<ImageItem[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isIterating, setIsIterating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load folders
  const loadFolders = useCallback(async () => {
    try {
      const res = await fetch('/api/folders');
      const data = await res.json();
      if (data.folders) setFolders(data.folders);
    } catch {
      console.error('Failed to load folders');
    }
  }, []);

  // Load images based on selected folder
  const loadImages = useCallback(async () => {
    try {
      let url = '/api/images';
      if (selectedFolderId === 'unfiled') {
        url = '/api/images?folderId=null';
      } else if (selectedFolderId) {
        url = `/api/images?folderId=${selectedFolderId}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      if (data.images) setImages(data.images);
    } catch {
      console.error('Failed to load images');
    }
  }, [selectedFolderId]);

  // Load all images for counts
  const loadAllImages = useCallback(async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      if (data.images) setAllImages(data.images);
    } catch {
      console.error('Failed to load all images');
    }
  }, []);

  useEffect(() => {
    loadFolders();
    loadAllImages();
  }, [loadFolders, loadAllImages]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  // Calculate image counts per folder
  const imageCounts: Record<string, number> = {};
  allImages.forEach((img) => {
    if (img.folderId) {
      imageCounts[img.folderId] = (imageCounts[img.folderId] || 0) + 1;
    }
  });
  const unfiledCount = allImages.filter((img) => !img.folderId).length;

  // Generate image
  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch('/api/images/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          folderId: selectedFolderId && selectedFolderId !== 'unfiled' ? selectedFolderId : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');

      // Refresh images
      await loadImages();
      await loadAllImages();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  // Iterate on image
  const handleIterate = async (prompt: string, parentImageId: string) => {
    setIsIterating(true);
    setError(null);
    try {
      const res = await fetch('/api/images/iterate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, parentImageId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Iteration failed');

      // Update selected image to the new iteration
      if (data.image) {
        setSelectedImage(data.image);
      }

      await loadImages();
      await loadAllImages();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to iterate image');
    } finally {
      setIsIterating(false);
    }
  };

  // Folder operations
  const handleCreateFolder = async (name: string) => {
    try {
      const res = await fetch('/api/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      if (res.ok) await loadFolders();
    } catch {
      console.error('Failed to create folder');
    }
  };

  const handleRenameFolder = async (id: string, name: string) => {
    try {
      await fetch(`/api/folders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      await loadFolders();
    } catch {
      console.error('Failed to rename folder');
    }
  };

  const handleDeleteFolder = async (id: string) => {
    try {
      await fetch(`/api/folders/${id}`, { method: 'DELETE' });
      if (selectedFolderId === id) setSelectedFolderId(null);
      await loadFolders();
      await loadImages();
      await loadAllImages();
    } catch {
      console.error('Failed to delete folder');
    }
  };

  // Image operations
  const handleMoveImage = async (imageId: string, folderId: string | null) => {
    try {
      await fetch('/api/images', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageId, folderId }),
      });
      await loadImages();
      await loadAllImages();
    } catch {
      console.error('Failed to move image');
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      await fetch(`/api/images?imageId=${imageId}`, { method: 'DELETE' });
      if (selectedImage?.id === imageId) setSelectedImage(null);
      await loadImages();
      await loadAllImages();
    } catch {
      console.error('Failed to delete image');
    }
  };

  // Sort images newest first
  const sortedImages = [...images].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="flex flex-col h-full -m-6 md:-m-8 lg:-m-10">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-700/60">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-mono text-terminal-green tracking-wide">
              // Image Studio
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Powered by Google Nano Banana &mdash; Create, iterate, and organize AI-generated images
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600">
            <span className="px-2 py-1 bg-charcoal-gray rounded border border-gray-700/40">
              {allImages.length} images
            </span>
            <span className="px-2 py-1 bg-charcoal-gray rounded border border-gray-700/40">
              {folders.length} folders
            </span>
          </div>
        </div>

        {/* Prompt input */}
        <PromptInput onSubmit={handleGenerate} isLoading={isGenerating} />

        {/* Error display */}
        {error && (
          <div className="mt-2 px-3 py-2 bg-signal-red/10 border border-signal-red/30 rounded text-sm text-signal-red">
            {error}
          </div>
        )}
      </div>

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Folder sidebar */}
        <FolderSidebar
          folders={folders}
          selectedFolderId={selectedFolderId}
          onSelectFolder={setSelectedFolderId}
          onCreateFolder={handleCreateFolder}
          onRenameFolder={handleRenameFolder}
          onDeleteFolder={handleDeleteFolder}
          imageCounts={imageCounts}
          totalCount={allImages.length}
          unfiledCount={unfiledCount}
        />

        {/* Image grid */}
        <div className="flex-1 overflow-y-auto p-4">
          {isGenerating && (
            <div className="mb-4 flex items-center gap-3 px-4 py-3 bg-terminal-green/5 border border-terminal-green/20 rounded-lg">
              <span className="inline-block w-4 h-4 border-2 border-terminal-green/30 border-t-terminal-green rounded-full animate-spin" />
              <span className="text-sm text-terminal-green font-mono">
                Generating image...
              </span>
            </div>
          )}

          <ImageGrid
            images={sortedImages}
            folders={folders}
            onSelectImage={setSelectedImage}
            onMoveImage={handleMoveImage}
            onDeleteImage={handleDeleteImage}
            selectedImageId={selectedImage?.id}
          />
        </div>
      </div>

      {/* Image viewer overlay */}
      {selectedImage && (
        <ImageViewer
          image={selectedImage}
          onIterate={handleIterate}
          onClose={() => setSelectedImage(null)}
          isIterating={isIterating}
        />
      )}
    </div>
  );
}
