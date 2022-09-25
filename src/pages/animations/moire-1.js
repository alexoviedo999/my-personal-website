import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Moire1 = () => {
  const setup = (p5) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
    p5.frameRate(30);
  };

  const draw = (p5) => {
    p5.background(10, 20, 30);
    p5.noFill();
    p5.translate(p5.width / 2, p5.height / 2);

    for (let i = 0; i < 200; i += 1) {
      p5.push();
      p5.rotate(p5.sin(p5.frameCount + i * 4) * 200);

      const r = p5.map(p5.sin(p5.frameCount), -1, 1, 50, 100);
      const g = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 50, 100);
      const b = p5.map(p5.sin(p5.frameCount / 4), -1, 1, 150, 255);
      p5.stroke(r, g, b);
      p5.rect(0, 0, 600 - i * 4, 600 - i * 4, 0);
      p5.pop();
    }
  };

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Moire1;
