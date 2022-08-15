import { MapControls, OrbitControls, Stats } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import type { Mesh } from 'three';
import { DoubleSide, PerspectiveCamera } from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

const Torus = () => {
  const boxRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    // const a = clock.getElapsedTime();
    boxRef.current.rotation.x += 0.03;
    boxRef.current.rotation.y = clock.getElapsedTime();
    // console.log(a); // the value will be 0 at scene initialization and grow each frame
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'red'} side={DoubleSide} />
    </mesh>
  );
};

function Controls() {
  const ref = useRef<OrbitControlsImpl>(null);
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // return <orbitControls args={[camera, domElement]} />;
  return <OrbitControls ref={ref} args={[camera, domElement]} />;
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

export default function testAnimation() {
  return (
    <div className="scene">
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 2],
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
          zoom: 100,
        }}
      >
        <color attach="background" args={['gray']} />
        <ambientLight />
        <pointLight position={[-3, -3, 2]} intensity={3} />
        <Torus />
        <axesHelper args={[10]} />
        <Controls />
        <MapControls />
        <Stats />
        <CameraHelper />
      </Canvas>
    </div>
  );
}
