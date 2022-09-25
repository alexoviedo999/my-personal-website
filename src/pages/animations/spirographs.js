import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Spirographs = () => {
  let r1;
  let r2;
  let a1 = 0;
  let a2 = 0;
  let a1Inc;
  let a2Inc;
  let prevX;
  let prevY;

  const setup = (p5) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    p5.angleMode(p5.DEGREES);
    p5.background(30);
    r1 = p5.random(150, 200);
    r2 = p5.random(150, 200);
    a1Inc = p5.random(1, 10);
    a2Inc = p5.random(1, 10);
    p5.frameRate(40);
  };

  const draw = (p5) => {
    p5.translate(p5.width / 2, p5.height / 2);

    for (let i = 0; i < 150; i += 1) {
      const x1 = r1 * p5.cos(a1);
      const y1 = r1 * p5.sin(a1);

      const x2 = x1 + r2 * p5.cos(a2);
      const y2 = y1 + r2 * p5.sin(a2);

      const r = p5.map(p5.sin(p5.frameCount + i), -1, 1, 10, 255);
      const g = p5.map(p5.cos(p5.frameCount + i), -1, 1, 10, 255);
      const b = p5.map(p5.sin(p5.frameCount + i), -1, 1, 255, 10);

      p5.strokeWeight(5);
      p5.stroke(r, g, b);
      p5.line(prevX, prevY, x2, y2);

      prevX = x2;
      prevY = y2;

      a1 += a1Inc;
      a2 += a2Inc;
    }
  };

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Spirographs;
