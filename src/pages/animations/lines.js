import React from 'react';
import dynamic from 'next/dynamic';
/* eslint-disable */
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const Lines = () => {

  let noiseOffset = 0.0;
  let noiseStep = 0.01;
  let lines = [];
  let r = 0;
  let g = 0;
  let b = 0;

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    p5.angleMode(p5.DEGREES);
    p5.frameRate(30);
  }
  

  const draw = (p5) => {
    p5.background(30);

    let newLine = [];
    noiseOffset = p5.random(200); 

    for (let x = 0; x <= p5.width; x += 10) {
      let y = p5.noise(noiseOffset) * p5.height;
      newLine.push(p5.createVector(x, y));
      noiseOffset += noiseStep;
    }
    r = p5.noise(noiseOffset) * 255;
    g = p5.noise(noiseOffset + 1000) * 255;
    b = p5.noise(noiseOffset + 2000) * 255;

    lines.push({path: newLine, color: [r, g, b]});

    if (lines.length > 20) {
      lines.shift();
    }

      // Draw all lines
  for (let lineObj of lines) {
    p5.stroke(lineObj.color[0], lineObj.color[1], lineObj.color[2]);
    p5.strokeWeight(3);
    p5.fill(lineObj.color[0], lineObj.color[1], lineObj.color[2]);
    p5.beginShape();
    for (let pt of lineObj.path) {
      p5.vertex(pt.x, pt.y);
      pt.y = p5.noise(pt.offset) * p5.height; // Update y-value based on Perlin noise
      pt.offset += noiseStep; 
    }
    p5.endShape();
  }
  
  }
  

  return (
    <div className="scene">
        <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Lines;