import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

let startX = 0;
const Sketch1 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);
    p5.stroke(255);
    p5.noFill();
  };

  const draw = (p5) => {
    p5.background(150);

    const addingX = p5.map(p5.mouseY, 0, p5.height, 0.01, 0.1);
    const detail = p5.map(p5.mouseX, 0, p5.width, 0, 32);
    let xOff = startX;

    p5.noiseDetail(detail);

    p5.beginShape();
    for (let i = 0; i < p5.width; i += 1) {
      p5.vertex(i, p5.noise(xOff) * p5.height);
      xOff += 0.01;
    }
    p5.endShape();

    startX += addingX;
  };

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />;
    </div>
  );
};

export default Sketch1;
