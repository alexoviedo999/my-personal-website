import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { MessagesProvider } from '../utils/useMessage';
import MessageForm from './components/messageForm';
import MessagesList from './components/messageList';

const Chatbot = () => {
  return (
    <Main
      meta={
        <Meta
          title="Jerky Boy Bot - AI Chatbot"
          description="Chat with Jerky Boy Bot, an AI assistant powered by advanced language models"
        />
      }
    >
      <MessagesProvider>
        <div className="flex flex-col h-[calc(100vh-9rem)]">
          {/* Header */}
          <div className="border-b border-base-300 bg-base-200/50 px-6 py-3">
            <div className="mx-auto flex max-w-4xl items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-content"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="font-display text-base font-semibold text-base-content">
                  Jerky Boy Bot
                </h1>
                <p className="text-xs text-base-content/60">AI Assistant</p>
              </div>
            </div>
          </div>

          {/* Messages - scrollable area */}
          <div className="flex-1 overflow-y-auto">
            <MessagesList />
          </div>

          {/* Input at bottom */}
          <div className="border-t border-base-300 bg-base-200/50 p-3">
            <div className="mx-auto max-w-4xl">
              <MessageForm />
            </div>
          </div>
        </div>
      </MessagesProvider>
    </Main>
  );
};

export default Chatbot;
