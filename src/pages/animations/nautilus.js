import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Nautilus = () => {
  const setup = (p5) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    p5.angleMode(p5.DEGREES);
    p5.frameRate(30);
  };

  const draw = (p5) => {
    p5.background(30);
    p5.rotateX(45);
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(3);

    for (let i = 0; i < 50; i += 1) {
      const r = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 10, 255);
      const g = p5.map(i, 30, 50, 170, 255);
      const b = p5.map(p5.tan(p5.frameCount), -1, 1, 10, 255);

      p5.stroke(r, g, b);
      p5.rotate(p5.frameCount / 15);
      p5.beginShape();
      for (let j = 0; j < 360; j += 165) {
        const rad = i * (p5.windowWidth / 165);
        const x = rad * p5.tan(j);
        const y = rad * p5.sin(j);
        const z = p5.sin(p5.frameCount * 2 + i * 5) * 100;

        p5.vertex(x, y, z);
      }
      p5.endShape(p5.CLOSE);
    }
  };

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Nautilus;
