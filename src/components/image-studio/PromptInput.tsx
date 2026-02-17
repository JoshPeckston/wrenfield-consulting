'use client';

import { useState } from 'react';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  placeholder?: string;
  buttonText?: string;
}

export default function PromptInput({
  onSubmit,
  isLoading,
  placeholder = 'Describe the image you want to create...',
  buttonText = 'Generate',
}: PromptInputProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        placeholder={placeholder}
        disabled={isLoading}
        rows={2}
        className="flex-1 bg-deep-black border border-gray-700 rounded-lg px-4 py-3 text-sm text-off-white placeholder-gray-600 focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green/30 resize-none disabled:opacity-50 font-sans"
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="px-6 py-3 bg-terminal-green text-deep-black font-mono font-semibold text-sm rounded-lg hover:bg-terminal-green/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all self-end"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-deep-black/30 border-t-deep-black rounded-full animate-spin" />
            Working...
          </span>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}
