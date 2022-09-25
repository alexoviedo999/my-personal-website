import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Sketch1 = () => {
  let xoff = 0;
  let yoff = 0;
  const setup = (p5) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    p5.background(150);
  };

  const draw = (p5) => {
    // Tell p5 we will work with pixels
    p5.loadPixels();
    // let xoff = 0.0;
    // let yoff = 0.0;

    // Updating pixels with perlin noise
    function updateColor() {
      console.log('xoff', xoff);
      for (let x = 0; x < p5.width; x += 1) {
        for (let y = 0; y < p5.height; y += 1) {
          // Calculating brightness value for noise
          const bright = p5.map(p5.noise(xoff, yoff), 0, 1, 0, 255);
          const xColor = p5.map(p5.noise(xoff, yoff), 0, 1, 0, x - 255);
          const yColor = p5.map(p5.noise(xoff, yoff), 0, 1, 0, y - 255);
          p5.set(x, y, p5.color(xColor, yColor, p5.floor(bright)));
          yoff += 0.05; // Incrementing y-offset perlins noise
        }
        xoff += 0.05; // Incrementing x-offset perlins noise
      }
    }

    yoff += 0.5;
    xoff += 0.5;
    updateColor();

    p5.updatePixels();
  };

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Sketch1;
