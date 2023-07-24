import React from "react";
import ai from "../assets/ai.png";

const About = () => {
  return (
    <section className="py-16 w-full">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex flex-col gap-6">
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-white text-2xl font-kidGames leading-[33.60px] tracking-wide"
          >
            ABOUT US
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className=" text-teal-300 text-5xl font-kidGames tracking-wide"
          >
            RARE HAMSTER
          </div>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className=" text-white font-medium leading-10"
          >
            Use rarity meme cards on your favorite DeFi racing game
            “HamsterRace”. Our one-of-a-kind Rare Hamster rarity card consists
            of an abstract canvas followed by a vibrant palette. Our 3d design
            was crafted this way so any user can spot even the slightest amount
            of detail from within the card. In fact, our designed background,
            hamsters and rarity card was made from the best designers in the
            game!
          </p>
        </article>
        <img
          src={ai}
          data-aos="zoom-in"
          data-aos-duration="800"
          alt=""
          className="mx-auto lg:ml-auto"
        />
      </div>
    </section>
  );
};

export default About;
