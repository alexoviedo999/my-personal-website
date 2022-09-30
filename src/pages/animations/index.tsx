import Image from 'next/image';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Animation1 from './animation1';

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
    image: '/animation-screenshots/circle-snake.png',
    title: 'Circle Snake',
    url: './animations/noc/noc-i-05/',
  },
  {
    image: '/animation-screenshots/animation1.png',
    title: 'Animation 1',
    url: './animations/animation1',
  },
  {
    image: '/animation-screenshots/animation3.png',
    title: 'Animation 3',
    url: './animations/animation3',
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
          <a>
            <Image
              src={animationItem.image}
              alt="Animation Card"
              width={500}
              height={500}
            />
          </a>
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
      <Animation1></Animation1>
      <div className="absolute mt-16">
        <div className="relative flex flex-col">
          <h1 className="m-4 text-center text-4xl">Animations</h1>
        </div>
        <div className="relative z-20 mt-12 items-center justify-evenly">
          <CardList />
        </div>
      </div>
    </Main>
  );
};

export default AnimationsIndex;
