import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Animaton1 from './animations/animation1';

const Skills = () => {
  // TODO: refactor with flexbox and Daisy figures to make more responsive
  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <Animaton1></Animaton1>
      <div className="fixed top-0 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-4xl">My Skills</h1>
        <section className="z-10 overflow-hidden text-gray-700">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex max-w-xl flex-wrap md:-m-2">
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-transparent md:p-2">
                  <img
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="/js_logo.svg"
                    alt="javascript logo"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-transparent p-1 md:p-2">
                  <img
                    alt="HTML 5 Logo"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="/HTML5_Badge.svg"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-transparent p-1 md:p-2">
                  <img
                    alt="CSS 3 Logo"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="/CSS3_logo.svg"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-transparent p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-transparent p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-contain object-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap">
                <div className="m-1 w-full bg-transparent p-1 md:p-2">
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
