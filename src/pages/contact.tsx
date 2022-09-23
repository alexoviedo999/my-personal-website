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
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-2xl">We&apos;ll be in touch soon.</div>
      </>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <div
        className="flex h-screen flex-col 
      items-center justify-center"
      >
        <div className="mb-16 pt-0">
          <h2 className="text-center text-3xl text-gray-500">Contact Me</h2>
        </div>
        <div className="flex">
          <div className="order-1 mt-20 mr-8 ml-28 flex-none items-center">
            <a
              aria-label="Linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/alejandrooviedo/"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-24 w-24 fill-current"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </svg>
            </a>
          </div>
          <div className="order-2 flex-none items-center border-l-2 border-gray-600">
            <form
              className="mb-4 rounded px-8 pt-6 pb-8 shadow-md"
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="relative w-full rounded border-0 bg-base-100 p-3 text-sm shadow outline-none placeholder:text-gray-500 autofill:bg-base-100 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="relative w-full rounded border-0 bg-base-100 p-3 text-sm shadow outline-none placeholder:text-gray-500 autofill:bg-base-100 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <textarea
                  placeholder="Your message"
                  name="message"
                  className="relative w-full rounded border-0 bg-base-100 p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-500 autofill:bg-base-100 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div className="mb-3 ml-2 pt-0">
                <button
                  className="mr-1 mb-1 rounded bg-blue-700 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
                  type="submit"
                >
                  Send a message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
