// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const roundedSquareWave = (t: number, delta: number, a: number, f: number) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};

function Dots() {
  const ref = useRef<{ setMatrixAt: Function; instanceMatrix: any }>(null);
  const { vec, transform, positions, distances } = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const vec = new THREE.Vector3();
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const transform = new THREE.Matrix4();

    // Precompute randomized initial positions
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3();
      // Place in a grid
      position.x = (i % 100) - 50;
      position.y = Math.floor(i / 10) - 50;

      // Offset every other column (hexagonal pattern)
      position.y += (i % 2) * 0.5;

      // Add some noise
      position.x += Math.random() * 0.3;
      position.y += Math.random() * 0.3;
      return position;
    });

    // Precompute initial distances with octagonal offset
    const right = new THREE.Vector3(1, 0, 0);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const distances = positions.map((pos) => {
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5;
    });
    return { vec, transform, positions, distances };
  }, []);
  useFrame(({ clock }) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10000; i++) {
      const dist = distances[i];

      // Distance affects the wave phase
      const t = clock.elapsedTime - dist / 25;

      // Oscillates between -0.4 and +0.4
      const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8);

      // Scale initial position by our oscillator
      vec.copy(positions[i]).multiplyScalar(wave + 1.3);

      // Apply the Vector3 to a Matrix4
      transform.setPosition(vec);

      // Update Matrix4 for this instance
      ref.current?.setMatrixAt(i, transform);
    }
    if (ref.current) {
      ref.current.instanceMatrix.needsUpdate = true;
    }
  });
  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.15]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
}

export default function Animaton1() {
  return (
    <div className="scene">
      <Canvas orthographic camera={{ zoom: 20 }}>
        <color attach="background" args={['blue']} />
        <Dots />
      </Canvas>
    </div>
  );
}
