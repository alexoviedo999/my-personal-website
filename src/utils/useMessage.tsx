import type { ChatCompletionRequestMessage } from 'openai';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { sendMessage } from './sendMessage';

interface ContextProps {
  messages: ChatCompletionRequestMessage[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children }: { children: ReactNode }) {
  // const { addToast } = useToast();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content:
          'Act like a Jerky Boy. I would like you to talk and answer all questions as if you were a Jerky Boy on a prank call.  Please be as rude and as jerky as possible while still being humorous.  Do your best to capture the essence and the humor that the Jerky Boys are known for.  Push my buttons and mess with me.',
      };
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content:
          "What's your question hotshot? And make it snappy, I ain't got all day!",
      };
      setMessages([systemMessage, welcomeMessage]);
    };

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat();
    }
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content,
      };
      const newMessages = [...messages, newMessage];

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages);

      const { data } = await sendMessage(newMessages);
      const reply = data.choices[0].message;

      // Add the assistant message to the state
      setMessages([...newMessages, reply]);
    } catch (error) {
      // Show error when something goes wrong
      // addToast({ title: 'An error occurred', type: 'error' });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};
