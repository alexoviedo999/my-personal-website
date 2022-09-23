// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import dynamic from 'next/dynamic';
import type p5Types from 'p5'; // Import this for typechecking and intellisense
import React from 'react';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

interface ComponentProps {
  // Your component props
}

let x = 50;
const y = 50;

const Sketch1: React.FC<ComponentProps> = () => {
  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x += 1;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default function testAnimation() {
  return (
    <div className="scene">
      <Sketch1 />
    </div>
  );
}
