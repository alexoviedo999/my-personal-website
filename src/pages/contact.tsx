'use client';

import React, { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const FORM_ENDPOINT = 'https://formsubmit.co/6ab4ab3e72ec227c3063588139e92fbe';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <Main
        meta={
          <Meta
            title="Thank You - Alejandro Oviedo"
            description="Thank you for reaching out"
          />
        }
      >
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-success"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-display text-3xl font-bold text-base-content">
              Thank you!
            </h2>
            <p className="mt-2 text-base-content/70">
              I'll get back to you soon.
            </p>
          </div>
        </div>
      </Main>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title="Contact - Alejandro Oviedo"
          description="Get in touch with Alejandro Oviedo"
        />
      }
    >
      <div className="container mx-auto min-h-screen max-w-5xl px-4 py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-tight text-base-content md:text-5xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-base-content/70">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-base-300 bg-base-200/30 p-6">
                <h3 className="mb-4 font-display font-semibold text-primary">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/alejandrooviedo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-base-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/alexoviedo999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-base-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com/alexoviedo999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-primary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-base-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                    <span className="font-medium">Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form
              className="rounded-xl border border-base-300 bg-base-200/30 p-6 space-y-4"
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-base-content/80">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="w-full rounded-lg border border-base-300 bg-base-100 p-3 text-base-content placeholder:text-base-content/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-base-content/80">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  name="email"
                  className="w-full rounded-lg border border-base-300 bg-base-100 p-3 text-base-content placeholder:text-base-content/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-base-content/80">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-base-300 bg-base-100 p-3 text-base-content placeholder:text-base-content/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
