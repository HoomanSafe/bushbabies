import React from "react";
import threeD from "../assets/3d.png";

const Hero = () => {
  return (
    <section className="py-28 w-full" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className=" flex flex-col gap-8">
          <h1
            className="text-white text-5xl md:text-7xl font-kidGames tracking-wider"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            GET MONEY <br />
            NOW PLAY <br />
            FREE
          </h1>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="flex  items-center gap-8 flex-col md:flex-row"
          >
            <a href="https://t.me/RareHamster">
              <div className="w-[261px] h-[54px] px-8 py-4 bg-gradient-to-r from-teal-300 to-teal-400 rounded shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-slate-950 text-base font-kidGames leading-snug tracking-tight">
                  JOIN US ON TELEGRM
                </div>
              </div>
            </a>
            <a href="">
              <div className="w-[261px] h-[54px] px-8 py-4 bg-gradient-to-r from-teal-300 to-teal-400 rounded shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-slate-950 text-base font-kidGames leading-snug tracking-tight">
                  BUY NOW ON UNISWAP
                </div>
              </div>
            </a>
          </div>
        </article>
        <img
          src={threeD}
          data-aos="zoom-out"
          data-aos-duration="800"
          alt=""
          className="lg:ml-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
