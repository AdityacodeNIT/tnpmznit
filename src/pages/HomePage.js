import React from "react";
import Team from "../components/Team";
import Hero from "../components/Hero";
import NewsandEvents from "../components/NewsandEvents";
import About from "../components/About";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewsandEvents />
      <About />
      <Team />
    </div>
  );
};

export default HomePage;
