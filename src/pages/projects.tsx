import dynamic from 'next/dynamic';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const NoiseGrid = dynamic(() => import('./animations/noiseGrid'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-base-100" />,
});

const projects = [
  {
    title: 'AI-Powered EHR Assistant',
    meta: 'Capstone Project | UT Austin McCombs - AI Agents for Business Applications | 2026',
    description:
      'An agentic assistant that helps clinicians navigate electronic health records - retrieving patient history, summarizing chart notes, and answering natural-language questions grounded in structured and unstructured EHR data, with human-in-the-loop safeguards for clinical accuracy.',
    tags: [
      'LangChain',
      'Agent Orchestration',
      'Prompt Engineering',
      'Python',
      'Human-in-the-loop',
    ],
  },
  {
    title: 'RAG System for Enterprise Document Q&A',
    meta: 'Capstone Project | UT Austin McCombs - AI Agents for Business Applications | 2026',
    description:
      'A Retrieval-Augmented Generation system that lets users ask natural-language questions over a long-form Harvard Business Review case study on Apple, combining vector search with an LLM to ground answers in the source document and reduce hallucination.',
    tags: [
      'RAG',
      'Vector Search',
      'LangChain',
      'Model Context Protocol (MCP)',
      'Evals',
    ],
  },
];

const Projects = () => {
  return (
    <Main
      meta={
        <Meta
          title="Projects - Alejandro Oviedo"
          description="Agentic AI projects, including an EHR assistant and a RAG system for enterprise document Q&A"
        />
      }
    >
      <div className="fixed inset-0 -z-10">
        <NoiseGrid />
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="z-10 space-y-12">
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-tight text-base-content md:text-5xl">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-base-content/70">
              Agentic AI systems I've built, from clinical assistants to
              enterprise document Q&A
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-base-300 bg-base-200/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <h2 className="font-display text-xl font-semibold text-base-content md:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {project.meta}
                </p>
                <p className="mt-4 leading-relaxed text-base-content/80">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-outline badge-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Projects;
