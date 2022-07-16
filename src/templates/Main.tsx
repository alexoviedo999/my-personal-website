import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="">
    {props.meta}

    <div className="">
      <div className="fixed z-30 flex h-10 w-full items-center bg-[#15183c] px-5 font-sans shadow-lg sm:h-14">
        <div className="hidden">
          <div className="">{AppConfig.title}</div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div className="">
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-color-link border-none">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="text-color-link border-none">About</a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="text-color-link border-none"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
      </div>
    </div>
  </div>
);

export { Main };
