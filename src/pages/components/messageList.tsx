import { useMessages } from '../../utils/useMessage';

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();

  const getMessageContent = (
    content: string | null | undefined | unknown[],
  ): string => {
    if (content === null || content === undefined) return '';
    if (typeof content === 'string') return content;
    return JSON.stringify(content);
  };

  // Show welcome message if no messages
  const hasMessages = messages && messages.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-4 sm:py-6">
      {!hasMessages && !isLoadingAnswer && (
        <div className="flex flex-col items-center justify-center py-12 text-center sm:py-20">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className="mb-2 font-display text-xl font-semibold text-base-content">
            Welcome to Jerky Boy Bot
          </h2>
          <p className="max-w-md text-base-content/60">
            Ask me anything! I&apos;m an AI assistant ready to help with your
            questions.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {messages?.map((message, i) => {
          const isUser = message.role === 'user';
          if (message.role === 'system') return null;
          const messageContent = getMessageContent(message.content);
          return (
            <div
              id={`message-${i}`}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              key={`message-${i}`}
            >
              {!isUser && (
                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  isUser
                    ? 'bg-primary text-primary-content'
                    : 'bg-base-200 text-base-content'
                }`}
              >
                <p className="whitespace-pre-wrap">{messageContent.trim()}</p>
              </div>
              {isUser && (
                <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-base-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-base-content"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isLoadingAnswer && (
        <div className="flex justify-start">
          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
          <div className="flex items-center gap-1 rounded-2xl bg-base-200 px-4 py-3">
            <span className="h-2 w-2 animate-bounce rounded-full bg-base-content/40"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-base-content/40 [animation-delay:0.15s]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-base-content/40 [animation-delay:0.3s]"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
