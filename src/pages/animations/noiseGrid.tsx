'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

import { ImprovedNoise } from '@/utils/ImprovedNoise';

const noise = new ImprovedNoise();

// Constants
const NOISE_SCALE = 0.9;
const Z_SCALE = 1.0;
const TIME_MULTIPLIER = 0.4;
const LIGHTNESS_MULT = 3.0;

const LOW_COLOR = new THREE.Color(0.0, 0.3, 0.6);
const HIGH_COLOR = new THREE.Color(1.0, 1.0, 1.0);

function NoisePoints() {
  const ref = useRef<THREE.Points>(null);
  const col = useMemo(() => new THREE.Color(), []);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(24, 24, 60, 60);
    const count = geo.attributes.position!.count;
    const colorArray = new Float32Array(count * 3);
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colorArray, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const geo = ref.current.geometry;
    const verts = geo.attributes.position!;
    const colors = geo.attributes.color!;
    const elapsedTime = clock.getElapsedTime() * TIME_MULTIPLIER;

    for (let i = 0; i < verts.count; i++) {
      const x = verts.getX(i);
      const y = verts.getY(i);

      const n = noise.noise(x * NOISE_SCALE, y * NOISE_SCALE, elapsedTime);
      verts.setXYZ(i, x, y, n * Z_SCALE);

      col.lerpColors(LOW_COLOR, HIGH_COLOR, n * LIGHTNESS_MULT);
      colors.setXYZ(i, col.r, col.g, col.b);
    }

    verts.needsUpdate = true;
    colors.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <primitive object={geometry} attach="geometry" />
      <pointsMaterial size={0.05} vertexColors />
    </points>
  );
}

export default function NoiseGrid() {
  return (
    <div className="scene" style={{ zIndex: 0 }}>
      <Canvas style={{ background: 'black' }} camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['black']} />
        <NoisePoints />
      </Canvas>
    </div>
  );
}
