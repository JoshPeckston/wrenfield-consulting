'use client';

import { useState, useEffect } from 'react';
import PromptInput from './PromptInput';

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

interface ImageViewerProps {
  image: ImageItem;
  onIterate: (prompt: string, parentImageId: string) => void;
  onClose: () => void;
  isIterating: boolean;
}

export default function ImageViewer({
  image,
  onIterate,
  onClose,
  isIterating,
}: ImageViewerProps) {
  const [iterations, setIterations] = useState<ImageItem[]>([]);
  const [activeImage, setActiveImage] = useState<ImageItem>(image);

  useEffect(() => {
    setActiveImage(image);
    loadIterations();
  }, [image.id]);

  const loadIterations = async () => {
    const rootId = image.parentImageId || image.id;
    try {
      const res = await fetch(`/api/images?parentImageId=${rootId}`);
      const data = await res.json();
      if (data.images) {
        setIterations(data.images);
      }
    } catch {
      // Silently fail - iterations are supplementary
    }
  };

  const handleIterate = (prompt: string) => {
    onIterate(prompt, activeImage.id);
  };

  return (
    <div className="fixed inset-0 z-50 bg-deep-black/95 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700/60">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-off-white transition-colors font-mono text-sm"
          >
            &larr; Back
          </button>
          <span className="text-gray-600 text-xs font-mono">|</span>
          <span className="text-xs text-gray-500 font-mono">
            {activeImage.model}
          </span>
          {activeImage.iterationNumber > 0 && (
            <span className="text-xs bg-steel-blue/20 text-steel-blue px-2 py-0.5 rounded font-mono">
              Iteration {activeImage.iterationNumber}
            </span>
          )}
        </div>
        <span className="text-xs text-gray-600 font-mono">
          {new Date(activeImage.createdAt).toLocaleString()}
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Image display */}
        <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
          <img
            src={`/generated-images/${activeImage.fileName}`}
            alt={activeImage.prompt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        {/* Iteration history sidebar */}
        {iterations.length > 1 && (
          <div className="w-48 border-l border-gray-700/60 overflow-y-auto p-2 space-y-2">
            <h4 className="text-[10px] font-mono text-terminal-green uppercase tracking-widest px-1 mb-2">
              Versions
            </h4>
            {iterations.map((iter) => (
              <button
                key={iter.id}
                onClick={() => setActiveImage(iter)}
                className={`w-full rounded overflow-hidden border transition-all ${
                  activeImage.id === iter.id
                    ? 'border-terminal-green'
                    : 'border-gray-700/40 hover:border-gray-600'
                }`}
              >
                <div className="aspect-square bg-charcoal-gray">
                  <img
                    src={`/generated-images/${iter.fileName}`}
                    alt={iter.prompt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-1.5 py-1 bg-charcoal-gray/50">
                  <span className="text-[10px] font-mono text-gray-400">
                    {iter.iterationNumber === 0 ? 'Original' : `v${iter.iterationNumber}`}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Prompt info */}
      <div className="px-4 py-2 border-t border-gray-700/30">
        <p className="text-xs text-gray-500 font-mono mb-1">// prompt</p>
        <p className="text-sm text-gray-300">{activeImage.prompt}</p>
      </div>

      {/* Iterate input */}
      <div className="px-4 py-3 border-t border-gray-700/60 bg-charcoal-gray/50">
        <PromptInput
          onSubmit={handleIterate}
          isLoading={isIterating}
          placeholder="Describe changes to make to this image..."
          buttonText="Iterate"
        />
      </div>
    </div>
  );
}
