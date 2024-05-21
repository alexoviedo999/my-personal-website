import { BubbleChat } from 'flowise-embed-react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const FlipsideBot = () => {
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
              <div className="flex justify-center">
                <img
                  src="/psychedelic-dolphin-no-bg.png"
                  className="h-60 w-60 justify-center rounded-full"
                  alt="avatar"
                />
              </div>
              <h1 className="mt-5 text-left text-5xl font-semibold drop-shadow-lg">
                Welcome to Flippy the Flipper&apos;s Flipside Event Finder...
              </h1>

              <h2 className="text-left font-semibold drop-shadow-lg">
                Just click on the chat bubble on the bottom right and let Flippy
                know the day of the week and time you&apos;re looking to find an
                event. Flippy will try to find some Flipside awesomeness for
                you.
              </h2>
              <p className="text-left drop-shadow-lg">Ex:</p>
              <p className="text-left drop-shadow-lg">
                - Can you tell me some events happening on Friday at 8:00 PM?
              </p>
              <p className="text-left font-semibold drop-shadow-lg">
                - Can you tell me where I can find food on Saturday at 6:00 PM?
              </p>
            </div>
          </div>
        </div>
        <BubbleChat
          chatflowid="1a31456f-03f1-4865-a1d5-ff518f0d8e57"
          apiHost="https://flowise-qcmu.onrender.com"
        />
      </div>
    </Main>
  );
};

export default FlipsideBot;
