import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Animation1 from './animation1';

const animationItems = [
  {
    image: '../../animation-screenshots/animation1.png',
    title: 'Animation 1',
    url: './animation1',
  },
  {
    image: '../../animation-screenshots/animation2.png',
    title: 'Animation 2',
    url: './animation2',
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
      className="card card-compact m-4 bg-base-100 shadow-xl sm:m-2 md:basis-1/3 lg:basis-1/4"
    >
      <figure>
        <img
          className="w-full"
          src={animationItem.image}
          alt="Animation Card"
        />
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
      <div className="z-50 mt-24 flex basis-full flex-col items-center justify-evenly">
        <h1 className="text-4xl">Animations</h1>
        <CardList />
      </div>
      <div className=""></div>
    </Main>
  );
};

export default AnimationsIndex;
