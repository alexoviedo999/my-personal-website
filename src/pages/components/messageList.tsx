import { useMessages } from '../../utils/useMessage';

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages();

  return (
    <div className="m-[120px] mx-auto max-w-3xl">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user';
        if (message.role === 'system') return null;
        return (
          <div
            id={`message-${i}`}
            className={`fade-up mb-2 flex ${
              isUser ? 'justify-end' : 'justify-start'
            } ${i === 1 ? 'max-w-md' : ''}`}
            key={message.content}
          >
            {!isUser && (
              <img
                src="/Flag_of_Tar_Valon.svg"
                className="h-9 w-9 cursor-pointer rounded-full bg-white"
                alt="avatar"
              />
            )}
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative rounded-lg px-3 py-2 ${
                isUser
                  ? 'mr-2 bg-gradient-to-br from-indigo-700 to-indigo-600 text-white'
                  : 'ml-2 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
              }`}
            >
              {message.content.trim()}
            </div>
            {isUser && (
              <img
                src="/swirl.svg"
                className="h-9 w-9 rounded-full"
                alt="avatar"
              />
            )}
          </div>
        );
      })}
      {isLoadingAnswer && (
        <div className="mb-4 flex justify-start">
          <img
            src="/Flag_of_Tar_Valon.svg"
            className="h-9 w-9 cursor-pointer rounded-full bg-white fill-red-500"
            alt="avatar"
          />
          <div className="loader relative ml-2 flex items-center justify-between space-x-1.5 rounded-full bg-gray-200 p-2.5 px-4 dark:bg-gray-800">
            <span className="block h-3 w-3 rounded-full"></span>
            <span className="block h-3 w-3 rounded-full"></span>
            <span className="block h-3 w-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesList;
