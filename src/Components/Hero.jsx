import React from "react";
import threeD from "../assets/logo2.png";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";
import ParallaxCard from './ParallaxCard'
import TextModel from './TextModel'

const Hero = () => {
  return (
    <section className="py-28 w-full" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="order-2 lg:order-1 flex flex-col gap-8">
          <h1
            className="text-white text-center lg:text-start text-5xl md:text-7xl font-kidGames tracking-wider"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            UNIQUE <br />
            <span className="text-emerald-300">THEBUSH</span>
            <br />
            BABIES
          </h1>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="flex  items-center gap-8 flex-col md:flex-row"
          >
            <a href="https://t.me/Bush_Babies">
              <div className="w-[261px] h-[54px] px-8 py-4 bg-gradient-to-r from-teal-300 to-teal-400 rounded shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-slate-950 text-base font-kidGames leading-snug tracking-tight">
                  JOIN US ON TELEGRAM
                </div>
              </div>
            </a>
            <a href="https://pancakeswap.finance/?outputCurrency=0xdcbA83900158058B3959e4ABc58816FD790efe0C">
              <div className="w-[261px] h-[54px] px-8 py-4 bg-gradient-to-r from-teal-300 to-teal-400 rounded shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-slate-950 text-base font-kidGames leading-snug tracking-tight">
                  BUY NOW ON PANCAKESWAP
                </div>
              </div>
            </a>
          </div>
        </article>
        
        <div className="w-full h-[100vh] bg-black/10">
        <Canvas
          style={{
            width: '100%',
            height: '100%',
          }}
          camera={{
            fov: 85,
            far: 1000,
            near: 0.1,
          }}
        >
          <motion.group
            animate={{
              rotateY: [0, Math.PI * 2],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
          >
            <ParallaxCard />
            <TextModel />
          </motion.group>
          <ambientLight color={'#ffffff'} intensity={0.3} />
          <directionalLight color={'#fff0dd'} position={[0, -5, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>

        </div>
      </div>
    </section>
  );
};

export default Hero;
