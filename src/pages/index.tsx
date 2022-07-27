import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x306bac,
          backgroundColor: 0x141b41,
          maxDistance: 27.0,
          points: 12.0,
          spacing: 16.0,
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
          <h1 className="text-color mt-5 text-left text-5xl font-semibold drop-shadow-lg">
            Hello, I am Alejandro Oviedo
          </h1>
          <h3 className="text-color text-left font-semibold drop-shadow-lg">
            I am a front-end developer with many interests.
          </h3>
        </div>
        <div className=" z-20 flex grow items-center justify-center">
          <div className="mx-auto -mt-20 flex-col  flex-wrap px-10">
            <ul>
              <li className="text-color-link m-3 rounded-md border-2 border-solid border-gray-50 pl-5 text-5xl font-semibold drop-shadow-lg hover:border-gray-500">
                <Link href="/skills/">
                  <a className="text-color-link border-none">Skills</a>
                </Link>
              </li>
              <li className="text-color-link m-3 rounded-md border-2 border-solid border-gray-50 pl-5  text-5xl font-semibold drop-shadow-lg hover:border-gray-500">
                Projects
              </li>
              <li className="text-color-link m-3 rounded-md border-2 border-solid border-gray-50 px-5  text-5xl font-semibold drop-shadow-lg hover:border-gray-500">
                Other Interests
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
