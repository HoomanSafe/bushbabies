import React, { useRef } from 'react';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import rubik from '../assets/fonts/rubik_smb.json';
import { motion } from 'framer-motion-3d';
import { useWindowSize } from '@uidotdev/usehooks';
import { RepeatWrapping, TextureLoader } from 'three';

extend({ TextGeometry });

function TextModel() {
  const textMesh = useRef(null);
  const { width } = useWindowSize();

  useFrame(() => {
    textMesh.current.geometry.center();
  });

  const font = new FontLoader().parse(rubik);
  const textOptions = {
    font,
    size: width <= 720 ? 0.32 : 0.52,
    height: 0.1,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    // bevelSegments: 4,
  };
  return (
    <motion.mesh
     
      position={[0, -1.7, 1]}
      ref={textMesh}
    >
      <textGeometry attach='geometry'  args={['Rare Hamster', textOptions]} />

      <meshStandardMaterial
        color={'#ffffff'}
        attach='material'
        
      />
    </motion.mesh>
  );
}

export default TextModel;
