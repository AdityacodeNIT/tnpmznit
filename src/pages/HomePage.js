import React from "react";
import Team from "../components/Team";
import Hero from "../components/Hero";
import NewsandEvents from "../components/NewsandEvents";
import About from "../components/About";
import Counts from "../components/Counts";
import WebTeam from "../components/WebTeam";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewsandEvents />
      <About />
      <Counts />
      <Team />
      <WebTeam />
    </div>
  );
};

export default HomePage;
