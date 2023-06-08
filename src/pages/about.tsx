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
                I&apos;m a seasoned Front-End Developer with over a decade of
                professional experience in the tech industry. My passion extends
                beyond software development, reaching into the realms of art,
                music, and geopolitics.
              </p>
              <br />
              <p className="text-left">
                For the past five years, I&apos;ve been an integral part of
                Visa&apos;s software engineering team, focusing on the
                innovation of the &quot;Click to Pay&quot; Secure Remote
                Commerce platform. This platform, used by an international
                market of over 60 million users, has been a testament to my love
                for working in diverse, multi-disciplinary teams. Together,
                we&apos;ve delivered an industry-wide commerce platform that
                transcends borders and time zones.
              </p>
              <br />
              <p className="text-left">
                I thrive on challenges and believe in the power of hard work,
                teamwork, and technical prowess to turn complex projects into
                successful ventures. My goal is to continually learn, grow, and
                excel as a Front-End Developer, using Agile principles to
                deliver value that users will love, iteration after iteration.
              </p>
              <br />
              <p className="text-left">
                On a personal note, I&apos;m a New York native currently
                residing in the vibrant city of Austin, Texas, with my wonderful
                wife and our twin children. When I&apos;m not coding, I&apos;m
                exploring my artistic side through Generative Art, spinning
                house and techno tracks as a DJ, or simply enjoying life&apos;s
                rhythm with my family.
              </p>
              <br />
              <p className="text-left">
                I&apos;m always open to new opportunities and connections. Feel
                free to
                <span>
                  <Link href="/contact">
                    <a className="link-hover border-none"> contact me!</a>
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
