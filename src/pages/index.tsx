import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <div
        ref={vantaRef}
        className="fixed flex h-full w-full grow flex-col justify-between"
      >
        <div className="mt-20 px-5">
          <h1 className="text-color mt-5 text-left text-4xl font-semibold drop-shadow-lg">
            Hello, I am Alejandro Oviedo
          </h1>
          <h3 className="text-color text-left font-semibold drop-shadow-lg">
            I am a front-end developer with many interests.
          </h3>
        </div>
        <div className=" z-20 flex grow items-center justify-center">
          <div className="mx-auto flex-col flex-wrap  px-10">
            <ul>
              <li className="text-color-link text-[30px] font-semibold drop-shadow-lg">
                Skills
              </li>
              <li className="text-color-link text-[30px] font-semibold drop-shadow-lg">
                Projects
              </li>
              <li className="text-color-link text-[30px] font-semibold drop-shadow-lg">
                Other Interests
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between border-t border-gray-500 bg-transparent p-8  shadow-lg sm:h-24">
          <div className="text-color font-sans text-sm ">
            © Copyright {new Date().getFullYear()} {AppConfig.title}
          </div>
          <div className="text-color text-sm">
            Developed by Alejandro Oviedo{' '}
            <span role="img" aria-label="Love">
              ♥
            </span>{' '}
          </div>
          <div className="text-color text-sm">
            Powered with Next.js and Three.js
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
