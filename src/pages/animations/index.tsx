import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Animation1 from './animation1';

const animationItems = [
  {
    image: '../../animation-screenshots/animation1.png',
    title: 'Animation 1',
    url: './animations/animation1',
  },
  {
    image: '../../animation-screenshots/animation2.png',
    title: 'Animation 2',
    url: './animations/animation2',
  },
  {
    image: '../../animation-screenshots/animation3.png',
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
          <img
            className="w-full cursor-pointer"
            src={animationItem.image}
            alt="Animation Card"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{animationItem.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
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
