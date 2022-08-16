import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Animation1 from './animations/animation1';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <Animation1></Animation1>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="z-50 mt-20 px-5">
              <h1 className="mt-5 text-left text-5xl font-semibold drop-shadow-lg">
                Hello, I am Alejandro Oviedo
              </h1>
              <h2 className="text-left font-semibold drop-shadow-lg">
                I am a front-end developer that enjoys making cool things happen
                on screens.
                <br />
                Feel free to check out my
                <span>
                  <Link href="/skills">
                    <a className="link-hover border-none"> tech skills,</a>
                  </Link>
                </span>
                <span>
                  <Link href="/animations">
                    <a className="link-hover border-none"> animations,</a>
                  </Link>
                </span>
                <span>
                  <Link href="https://github.com/alexoviedo999">
                    <a className="link-hover border-none"> github, </a>
                  </Link>
                </span>
                <span>and</span>
                <span>
                  <Link href="/animations">
                    <a className="link-hover border-none"> other interests.</a>
                  </Link>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
