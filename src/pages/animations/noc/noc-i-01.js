// import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

function Walker(p5) {
  function createWalker() {
    return {
      x: p5.width / 2,
      y: p5.height / 2,
    };
  }

  const myWalker = createWalker();

  const render = () => {
    p5.stroke('red');
    p5.point(myWalker.x, myWalker.y);
  };

  const step = () => {
    const choice = p5.floor(p5.random(4));
    if (choice === 0) {
      myWalker.x += 1;
    } else if (choice === 1) {
      myWalker.x -= 1;
    } else if (choice === 2) {
      myWalker.y += 1;
    } else {
      myWalker.y -= 1;
    }
    p5.constrain(myWalker.x, 0, p5.width - 1);
    p5.constrain(myWalker.y, 0, p5.height - 1);
  };

  return { render, step };
}

let walker;

const NOCi01 = () => {
  const setup = (p5) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    p5.background(127);
    walker = Walker(p5);
  };

  const draw = () => {
    walker.step();
    walker.render();
  };

  const windowResized = (p5) => {
    walker = Walker(p5);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(127);
  };

  return (
    <Sketch
      className="scene"
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};

export default NOCi01;
