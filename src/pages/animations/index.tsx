import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const NoiseGrid = dynamic(() => import('./noiseGrid'), {
  ssr: false,
});

const animationItems = [
  {
    image: '/animation-screenshots/moire-1.png',
    title: 'Square Moire',
    url: './animations/moire-1',
  },
  {
    image: '/animation-screenshots/spirographs.png',
    title: 'Spirographs',
    url: './animations/spirographs',
  },
  {
    image: '/animation-screenshots/tri-twister.png',
    title: 'Tri-twister',
    url: './animations/tri-twister/',
  },
  {
    image: '/animation-screenshots/nautilus.png',
    title: 'Nautilus',
    url: './animations/nautilus/',
  },
  {
    image: '/animation-screenshots/circle-snake.png',
    title: 'Circle Snake',
    url: './animations/noc/noc-i-05/',
  },
];

type Animation = {
  image: string;
  title: string;
  url: string;
};

function CardList() {
  // TODO: add more animation figures
  const cards = animationItems.map((animationItem: Animation) => (
    <li
      key={animationItem.title}
      className="card card-compact m-4 bg-base-100 shadow-xl sm:m-8 md:basis-1/3 lg:basis-1/4"
    >
      <figure>
        <Link className="" href={animationItem.url}>
          <Image
            src={animationItem.image}
            alt="Animation Card"
            width={500}
            height={500}
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{animationItem.title}</h2>
      </div>
    </li>
  ));
  return (
    <ul className="flex flex-row flex-wrap items-center justify-evenly">
      {cards}
    </ul>
  );
}

const AnimationsIndex = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alejandro Oviedo's Project Website"
          description="A website showing Alejandro Oviedo's interests and projects"
        />
      }
    >
      <NoiseGrid />
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="z-10 space-y-12">
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-tight text-base-content md:text-5xl">
              <span className="gradient-text">Animations</span>
            </h1>
            <p className="text-lg text-base-content/70">
              Interactive animations and creative coding experiments
            </p>
          </div>
          <div className="items-center justify-evenly">
            <CardList />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AnimationsIndex;
