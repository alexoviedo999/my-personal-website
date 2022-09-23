import React from 'react';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

let stepX;
let stepY;

const Sketch1 = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(10);
    p5.noStroke();
    // P5 uses RGB by default. Set color mode to HSB (Hue (color), Saturation (richness), and Brightness.
    p5.colorMode(p5.HSB, p5.width, p5.height, 100);
  };
  const draw = (p5) => {
    stepX = p5.mouseX + 2;
    stepY = p5.mouseY + 2;

    for (let gridY = 0; gridY < p5.height; gridY += stepY) {
      for (let gridX = 0; gridX < p5.width; gridX += stepX) {
        p5.fill(gridX, p5.height - gridY, 100);
        p5.rect(gridX, gridY, stepX, stepY);
      }
    }
  };

  return (
    <div className="scene">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};
export default Sketch1;
