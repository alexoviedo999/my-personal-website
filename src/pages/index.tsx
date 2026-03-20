import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const NoiseGrid = dynamic(() => import('./animations/noiseGrid'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-base-100" />,
});

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo - Front-End Developer"
          description="Front-end developer specializing in creative interactions, animations, and modern web experiences"
        />
      }
    >
      <NoiseGrid />
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl px-4">
          <div className="z-50 space-y-6">
            <h1 className="font-display text-left text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-base-content">Hello, I'm </span>
              <span className="gradient-text">Alejandro Oviedo</span>
            </h1>
            <p className="max-w-2xl text-left text-lg leading-relaxed text-base-content/70 md:text-xl">
              A front-end developer with 10+ years of experience crafting
              interactive digital experiences. I specialize in creative
              animations, modern web technologies, and building products that
              delight users.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/about"
                className="btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                About Me
              </Link>
              <Link
                href="/skills"
                className="btn btn-outline btn-primary transition-all duration-300 hover:scale-105"
              >
                Tech Skills
              </Link>
              <Link
                href="/animations"
                className="btn btn-outline btn-secondary transition-all duration-300 hover:scale-105"
              >
                Animations
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-6 text-base-content/60">
              <Link
                href="/chatbot"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-primary"
              >
                <span className="font-display font-semibold">
                  Jerky Boy Bot
                </span>
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
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <span className="hidden sm:inline">•</span>
              <a
                href="https://github.com/alexoviedo999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
