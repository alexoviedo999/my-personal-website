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
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <div className="fixed top-0 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl">Jerky Boy Bot</h1>
        <div className="hero-content">
          <MessagesProvider>
            <MessagesList />
            <div className="fixed inset-x-0 bottom-0">
              <MessageForm />
            </div>
          </MessagesProvider>
        </div>
      </div>
    </Main>
  );
};

export default Chatbot;
