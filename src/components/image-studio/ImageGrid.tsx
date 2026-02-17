'use client';

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

interface Folder {
  id: string;
  name: string;
}

interface ImageGridProps {
  images: ImageItem[];
  folders: Folder[];
  onSelectImage: (image: ImageItem) => void;
  onMoveImage: (imageId: string, folderId: string | null) => void;
  onDeleteImage: (imageId: string) => void;
  selectedImageId?: string | null;
}

export default function ImageGrid({
  images,
  folders,
  onSelectImage,
  onMoveImage,
  onDeleteImage,
  selectedImageId,
}: ImageGridProps) {
  if (images.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-600">
        <div className="text-center">
          <div className="text-4xl mb-3 opacity-30">///</div>
          <p className="font-mono text-sm">No images yet</p>
          <p className="text-xs mt-1">Use the prompt above to generate your first image</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-1">
      {images.map((image) => (
        <div
          key={image.id}
          className={`group relative rounded-lg overflow-hidden border transition-all cursor-pointer ${
            selectedImageId === image.id
              ? 'border-terminal-green ring-1 ring-terminal-green/30'
              : 'border-gray-700/60 hover:border-gray-600'
          }`}
          onClick={() => onSelectImage(image)}
        >
          {/* Image */}
          <div className="aspect-square bg-charcoal-gray">
            <img
              src={`/generated-images/${image.fileName}`}
              alt={image.prompt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <p className="text-xs text-off-white line-clamp-2 mb-1.5">{image.prompt}</p>
              <div className="flex items-center justify-between">
                {/* Move to folder dropdown */}
                <select
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    e.stopPropagation();
                    const val = e.target.value;
                    onMoveImage(image.id, val === 'null' ? null : val);
                  }}
                  value={image.folderId || 'null'}
                  className="bg-charcoal-gray border border-gray-700 rounded text-[10px] text-gray-400 px-1 py-0.5 focus:outline-none max-w-[100px]"
                >
                  <option value="null">Unfiled</option>
                  {folders.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteImage(image.id);
                  }}
                  className="text-[10px] text-gray-500 hover:text-signal-red transition-colors px-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Iteration badge */}
          {image.iterationNumber > 0 && (
            <div className="absolute top-1.5 right-1.5 bg-steel-blue/80 text-off-white text-[10px] font-mono px-1.5 py-0.5 rounded">
              v{image.iterationNumber}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
