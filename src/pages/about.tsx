import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title="About - Alejandro Oviedo"
          description="Learn more about Alejandro Oviedo, a Staff Software Engineer building agentic AI systems and securing payments at Visa"
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
              I'm a Staff Software Engineer at Visa focused on agentic AI
              engineering - building LLM-powered agents, RAG systems, and
              evaluation frameworks. My background spans front-end development,
              application security, and now agentic systems, with a passion that
              extends beyond software into art, music, and geopolitics.
            </p>

            <p>
              For nearly a decade, I've been part of Visa's software engineering
              team, most recently architecting agentic AI workflows that power a
              new white-label checkout experience for ecommerce merchants - work
              that tripled developer throughput and cut security evaluation time
              by 55%. I also serve as Security Champion for the platform,
              coordinating SSDLC remediation, CIAM, and Security Risk
              Assessments across every production release.
            </p>

            <p>
              In 2026, I completed a postgraduate program in AI Agents for
              Business Applications at UT Austin's McCombs School of Business,
              building an AI-powered EHR assistant and a Retrieval-Augmented
              Generation (RAG) system for enterprise document Q&A - deepening my
              focus on agent orchestration, LangChain, and the Model Context
              Protocol (MCP).
            </p>

            <p>
              I thrive on challenges and believe in the power of hard work,
              teamwork, and technical rigor to turn complex projects into
              successful ventures. My goal is to keep pushing the boundary
              between agentic AI and secure, production-grade software, using
              Agile principles to deliver value iteration after iteration.
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
              href="/projects"
              className="btn btn-primary transition-all duration-300 hover:scale-105"
            >
              View My Projects
            </Link>
            <Link
              href="/skills"
              className="btn btn-outline btn-primary transition-all duration-300 hover:scale-105"
            >
              View My Skills
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-primary transition-all duration-300 hover:scale-105"
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
