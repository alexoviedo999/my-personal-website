import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

function Walker(p5) {
  function createWalker() {
    return {
      position: p5.createVector(p5.width / 2, p5.height / 2),
      // Perlin noise x and y offset
      noff: p5.createVector(p5.random(1000), p5.random(1000)),
    };
  }

  const myWalker = createWalker();

  const display = () => {
    p5.strokeWeight(2);
    p5.fill(51);
    p5.stroke(0);
    p5.ellipse(myWalker.position.x, myWalker.position.y, 48, 48);
  };

  const walk = () => {
    // Noise returns a value between 0 and 1
    myWalker.position.x = p5.map(p5.noise(myWalker.noff.x), 0, 1, 0, p5.width);
    myWalker.position.y = p5.map(p5.noise(myWalker.noff.y), 0, 1, 0, p5.height);
    myWalker.noff.add(0.01, 0.01, 0);
  };
  return { display, walk };
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

  function draw() {
    walker.walk();
    walker.display();
  }

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />;
    </div>
  );
};

export default NOCi01;
