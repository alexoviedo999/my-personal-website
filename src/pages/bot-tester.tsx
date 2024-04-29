import { BubbleChat } from 'flowise-embed-react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const BotTester = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="z-50 my-20 px-5">
              <h1 className="mt-5 text-left text-5xl font-semibold drop-shadow-lg">
                Please test the bot...
              </h1>
            </div>
          </div>
        </div>
        <BubbleChat
          chatflowid="51fc1cab-aa50-4613-907f-ff832e66ace9"
          apiHost="https://flowise-qcmu.onrender.com"
        />
      </div>
    </Main>
  );
};

export default BotTester;
