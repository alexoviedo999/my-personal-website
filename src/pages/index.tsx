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
      <div ref={vantaRef} className="fixed -mt-10 h-full w-full">
        <div className="grid grid-cols-2 gap-2">
          <h1 className="mt-5 text-center text-4xl font-semibold text-white drop-shadow-lg">
            Hello, I am Alejandro Oviedo
            <span className="text-yellow-300">
              I am a front-end develop with with many interests.
            </span>
          </h1>
          <h3 className="text-2xl text-orange-400">HI THERE</h3>
        </div>
      </div>
    </Main>
  );
};

export default Index;
