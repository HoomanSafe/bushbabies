import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white font-Salutino">
      <Header />
      <Hero />
      <About />
      <Mics />
    </div>
  );
};

export default App;
