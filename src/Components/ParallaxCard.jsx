import { useLoader } from '@react-three/fiber';
import React from 'react';
import { TextureLoader } from 'three';
import { motion } from 'framer-motion-3d';

function ParallaxCard() {
    const cardFace = useLoader(TextureLoader, '/card-nobg.png')
  return (
      <motion.mesh>
        <boxGeometry attach={'geometry'} args={[3.5, 4, 0.001]} />
        <meshStandardMaterial
          attach={'material'}
          map={cardFace}
          transparent={true}
        />
      </motion.mesh>
  );
}


export default ParallaxCard
