import dynamic from 'next/dynamic';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const NoiseGrid = dynamic(() => import('./animations/noiseGrid'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-base-100" />,
});

const skills = [
  { name: 'JavaScript', logo: '/js_logo.svg', category: 'language' },
  { name: 'HTML5', logo: '/HTML5_Badge.svg', category: 'language' },
  { name: 'CSS3', logo: '/CSS3_logo.svg', category: 'language' },
  { name: 'TypeScript', logo: '/typescript-logo.svg', category: 'language' },
  { name: 'React', logo: '/react-logo.svg', category: 'framework' },
  { name: 'Next.js', logo: '/nextjs-logo.svg', category: 'framework' },
  { name: 'Node.js', logo: '/nodejs-logo.svg', category: 'runtime' },
  { name: 'LangChain', logo: '/langchain-logo.png', category: 'ai' },
  { name: 'Claude Code', logo: '/anthropic-logo.png', category: 'ai' },
  { name: 'OpenClaw', logo: '/openclaw-logo.png', category: 'ai' },
  { name: 'Three.js', logo: '/threejs-logo.svg', category: '3d' },
  { name: 'p5.js', logo: '/p5js-logo.svg', category: 'creative' },
];

const Skills = () => {
  return (
    <Main
      meta={
        <Meta
          title="Skills - Alejandro Oviedo"
          description="Technical skills and technologies I work with"
        />
      }
    >
      <div className="fixed inset-0 -z-10">
        <NoiseGrid />
      </div>
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="z-10 space-y-12">
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-tight text-base-content md:text-5xl">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-base-content/70">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex aspect-square flex-col items-center justify-center rounded-xl border border-base-300 bg-base-200/50 p-4 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-3 text-center text-xs font-medium text-base-content/70 transition-colors duration-300 group-hover:text-primary sm:text-sm">
                  {skill.name}
                </span>
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 z-20 w-max -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                  <div className="rounded-lg bg-base-300 px-3 py-1.5 text-xs font-medium text-base-content shadow-lg">
                    {skill.name}
                    <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-base-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Skills;
