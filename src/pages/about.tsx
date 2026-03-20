import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title="About - Alejandro Oviedo"
          description="Learn more about Alejandro Oviedo, a front-end developer with 10+ years of experience"
        />
      }
    >
      <div className="container mx-auto min-h-screen max-w-4xl px-4 py-24">
        <div className="space-y-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-base-content md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl font-medium leading-relaxed text-base-content/90">
              I'm a seasoned Front-End Developer with over a decade of
              professional experience in the tech industry. My passion extends
              beyond software development, reaching into the realms of art,
              music, and geopolitics.
            </p>

            <p>
              For the past five years, I've been an integral part of Visa's
              software engineering team, focusing on the innovation of the
              "Click to Pay" Secure Remote Commerce platform. This platform,
              used by an international market of over 60 million users, has been
              a testament to my love for working in diverse, multi-disciplinary
              teams. Together, we've delivered an industry-wide commerce
              platform that transcends borders and time zones.
            </p>

            <p>
              I thrive on challenges and believe in the power of hard work,
              teamwork, and technical prowess to turn complex projects into
              successful ventures. My goal is to continually learn, grow, and
              excel as a Front-End Developer, using Agile principles to deliver
              value that users will love, iteration after iteration.
            </p>

            <div className="my-8 rounded-xl border border-base-300 bg-base-200/50 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-primary">
                Outside of Work
              </h3>
              <p>
                I'm a New York native currently residing in the vibrant city of
                Austin, Texas, with my wonderful wife and our twin children.
                When I'm not coding, I'm exploring my artistic side through
                Generative Art, spinning house and techno tracks as a DJ, or
                simply enjoying life's rhythm with my family.
              </p>
            </div>

            <p>
              I'm always open to new opportunities and connections.{' '}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-semibold text-primary transition-colors duration-300 hover:text-primary/80"
              >
                Let's connect!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/skills"
              className="btn btn-outline btn-primary transition-all duration-300 hover:scale-105"
            >
              View My Skills
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default About;
