import React from "react";
import ai from "../assets/logo1.png";

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
            BUSH BABIES
          </div>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className=" text-white font-medium leading-10"
          >
            A Bush Baby is a small furry monkey-like animal that sleeps all day and plays all night.
            <br /> 
            
            Our The Bush Babies are native to the sub-Saharan region of Africa where we, as a team, are based.
            <br />
            <br />
            They live in trees, have infrared vision, incredible hearing, long tails, strong limbs and an unmistakable cry.

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
