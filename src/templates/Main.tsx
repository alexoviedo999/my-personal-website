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

    <div className="flex min-h-full flex-col items-stretch">
      <div className="fixed z-30 h-12 w-full items-center bg-transparent font-sans shadow-lg sm:h-14">
        <div className="hidden">
          <div className="">{AppConfig.title}</div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div className="shrink-0 py-2 px-5">
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

      <div className="text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
