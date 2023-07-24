import React from "react";
import ai from "../assets/ai.png";

const About = () => {
  return (
    <section className="py-16 w-full">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex flex-col gap-6">
          <div className="text-white text-2xl font-kidGames leading-[33.60px] tracking-wide">
            ABOUT US
          </div>
          <div className=" text-teal-300 text-5xl font-kidGames tracking-wide">
            RARE HAMSTER
          </div>
          <p className=" text-white font-medium leading-10">
            Pepe and Toad the memecoin Launched on the ethereum. Our mission is
            to provide a fun, community-driven investment opportunity that
            celebrates the power of memes and pop culture. With a vision to
            become the leading memecoin in the market, we believe Pepe and Toad
            is the perfect addition to any investor’s portfolio. Join us on this
            journey to revolutionize the world of memecoins. the market, we
            believe Pepe and Toad is the perfect addition to any investor’s
            portfolio. Join us on this journey to revolutionize the world of
            memecoins.
          </p>
        </article>
        <img src={ai} alt="" className="mx-auto lg:ml-auto" />
      </div>
    </section>
  );
};

export default About;
