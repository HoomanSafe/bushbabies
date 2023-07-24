import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white font-Salutino">
      <Header />
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
