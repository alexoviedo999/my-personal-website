import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Skills = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x141b41,
          shininess: 16.0,
          waveHeight: 2.5,
          waveSpeed: 0.8,
          zoom: 0.8,
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
            Skills
          </h1>
          <h3 className="text-color text-left font-semibold drop-shadow-lg">
            I am a front-end developer with many interests.
          </h3>
        </div>
      </div>
      {/* <div className="fixed top-0 flex h-full w-full items-center justify-center">
        <div className="container  grid grid-cols-4 gap-5">
          <div className=" h-10 w-10 rounded bg-white object-contain object-center">
            <Image src={jsLogo} alt="html5 logo" layout="fill" />
          </div>
          <div className=" rounded bg-white">
            <Image src={html5Logo} alt="html5 logo" />
          </div>
          <div className=" rounded bg-white pt-2 pl-10">
            <Image src={css3Logo} alt="html5 logo" />
          </div>
          <div className="rounded bg-white px-2 pt-2">
            <Image src={jsLogo} alt="html5 logo" />
          </div>
          <div className=" rounded bg-white px-2 pt-2">
            <Image src={html5Logo} alt="html5 logo" />
          </div>
          <div className=" rounded bg-white pt-2 pl-10">
            <Image src={css3Logo} alt="html5 logo" />
          </div>
          <div className="rounded bg-white px-2 pt-2">
            <Image src={jsLogo} alt="html5 logo" />
          </div>
          <div className="rounded bg-white px-2 pt-2">
            <Image src={jsLogo} alt="html5 logo" />
          </div>
        </div>
      </div> */}
      <div className="fixed top-0 flex h-full w-full items-center justify-center">
        <section className="z-10 overflow-hidden text-gray-700">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-white md:p-2">
                  <img
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                    alt="html5 logo"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-white p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-white p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-white p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-white p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-white p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Skills;
