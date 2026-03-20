import React, { useState } from 'react';

import { useMessages } from '../../utils/useMessage';

const MessageForm = () => {
  const [content, setContent] = useState('');
  const { addMessage, isLoadingAnswer } = useMessages();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isLoadingAnswer) return;
    addMessage(content);
    setContent('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-end gap-2 rounded-xl border border-base-300 bg-base-100 p-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          rows={1}
          className="max-h-48 min-h-[48px] w-full resize-none rounded-lg border-0 bg-base-200 px-4 py-3 text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          disabled={isLoadingAnswer}
        />
        <button
          type="submit"
          disabled={!content.trim() || isLoadingAnswer}
          className="btn btn-primary btn-square btn-sm flex-shrink-0 transition-all duration-300 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-base-content/40">
        Press Enter to send, Shift+Enter for new line
      </p>
    </form>
  );
};

export default MessageForm;
