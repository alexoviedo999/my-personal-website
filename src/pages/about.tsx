import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
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
                Hello...
              </h1>
              <p className="text-left font-semibold drop-shadow-lg">
                I am a front-end developer with a passion for many things
                including software development, art, music, and geopolitics.
              </p>
              <br />
              <p className="text-left">
                I&apos;ve been developing professionally for the last 11 years.
                For the last 5 years I&apos;ve worked at Visa as a Software
                Engineer. My focus is on innovating Visa&apos;s online
                &quot;Click to Pay&quot; Secure Remote Commerce platform. Click
                to Pay is used by an international market of over 60 million
                users. I love working closely with teams of product managers,
                project managers, designers, and quality assurance in multiple
                time zones to deliver an international, industry wide, commerce
                platform.
              </p>
              <br />
              <p className="text-left">
                I love taking on a challenging projects and by means of hard
                work, teamwork, and excellent technical skills, making them
                successful. I&apos;m motivated to learn, grow and excel as a
                front-end developer while using Agile principles to iteratively
                deliver value users will love.
              </p>
              <br />
              <p className="text-left">
                Originally from NY, I currently live in the Austin, TX area with
                my wonderful wife and twin kids. I love appreciating and making
                art, and in particular Generative art. I also love house, and
                techno music, and I&apos;m a pretty decent DJ too.
              </p>
              <br />
              <p className="text-left">
                I would love to hear from you, feel free to
                <span>
                  <Link href="/contact">
                    <a className="link-hover border-none"> contact me.</a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default About;
