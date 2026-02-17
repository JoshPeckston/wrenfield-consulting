'use client';

import { useState } from 'react';

interface Folder {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface FolderSidebarProps {
  folders: Folder[];
  selectedFolderId: string | null; // null = "All Images", "unfiled" = unfiled
  onSelectFolder: (folderId: string | null) => void;
  onCreateFolder: (name: string) => void;
  onRenameFolder: (id: string, name: string) => void;
  onDeleteFolder: (id: string) => void;
  imageCounts: Record<string, number>;
  totalCount: number;
  unfiledCount: number;
}

export default function FolderSidebar({
  folders,
  selectedFolderId,
  onSelectFolder,
  onCreateFolder,
  onRenameFolder,
  onDeleteFolder,
  imageCounts,
  totalCount,
  unfiledCount,
}: FolderSidebarProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');

  const handleCreate = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim());
      setNewFolderName('');
      setIsCreating(false);
    }
  };

  const handleRename = (id: string) => {
    if (editName.trim()) {
      onRenameFolder(id, editName.trim());
      setEditingId(null);
      setEditName('');
    }
  };

  return (
    <div className="w-56 flex-shrink-0 border-r border-gray-700/60 flex flex-col h-full">
      <div className="p-3 border-b border-gray-700/60">
        <h3 className="text-xs font-mono text-terminal-green uppercase tracking-widest mb-3">
          Folders
        </h3>

        {/* All Images */}
        <button
          onClick={() => onSelectFolder(null)}
          className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
            selectedFolderId === null
              ? 'bg-terminal-green/15 text-terminal-green'
              : 'text-gray-400 hover:text-off-white hover:bg-gray-700/50'
          }`}
        >
          <span className="flex items-center justify-between">
            <span>All Images</span>
            <span className="text-xs opacity-60">{totalCount}</span>
          </span>
        </button>

        {/* Unfiled */}
        <button
          onClick={() => onSelectFolder('unfiled')}
          className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
            selectedFolderId === 'unfiled'
              ? 'bg-terminal-green/15 text-terminal-green'
              : 'text-gray-400 hover:text-off-white hover:bg-gray-700/50'
          }`}
        >
          <span className="flex items-center justify-between">
            <span>Unfiled</span>
            <span className="text-xs opacity-60">{unfiledCount}</span>
          </span>
        </button>
      </div>

      {/* Folder list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {folders.map((folder) => (
          <div key={folder.id} className="group">
            {editingId === folder.id ? (
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleRename(folder.id);
                    if (e.key === 'Escape') setEditingId(null);
                  }}
                  className="flex-1 bg-deep-black border border-terminal-green/40 rounded px-2 py-1 text-sm text-off-white focus:outline-none focus:border-terminal-green"
                  autoFocus
                />
                <button
                  onClick={() => handleRename(folder.id)}
                  className="text-terminal-green text-xs px-1"
                >
                  OK
                </button>
              </div>
            ) : (
              <button
                onClick={() => onSelectFolder(folder.id)}
                className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors flex items-center justify-between ${
                  selectedFolderId === folder.id
                    ? 'bg-terminal-green/15 text-terminal-green'
                    : 'text-gray-400 hover:text-off-white hover:bg-gray-700/50'
                }`}
              >
                <span className="truncate">{folder.name}</span>
                <span className="flex items-center gap-1">
                  <span className="text-xs opacity-60">
                    {imageCounts[folder.id] || 0}
                  </span>
                  <span className="hidden group-hover:flex items-center gap-0.5 ml-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingId(folder.id);
                        setEditName(folder.name);
                      }}
                      className="text-xs text-gray-500 hover:text-steel-blue"
                      title="Rename"
                    >
                      E
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteFolder(folder.id);
                      }}
                      className="text-xs text-gray-500 hover:text-signal-red"
                      title="Delete"
                    >
                      X
                    </button>
                  </span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Create folder */}
      <div className="p-3 border-t border-gray-700/60">
        {isCreating ? (
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreate();
                if (e.key === 'Escape') setIsCreating(false);
              }}
              placeholder="Folder name..."
              className="flex-1 bg-deep-black border border-terminal-green/40 rounded px-2 py-1 text-sm text-off-white placeholder-gray-600 focus:outline-none focus:border-terminal-green"
              autoFocus
            />
            <button
              onClick={handleCreate}
              className="text-terminal-green text-sm font-mono px-2"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsCreating(true)}
            className="w-full text-left px-2 py-1.5 rounded text-sm text-gray-500 hover:text-terminal-green hover:bg-gray-700/50 transition-colors font-mono"
          >
            + New Folder
          </button>
        )}
      </div>
    </div>
  );
}
