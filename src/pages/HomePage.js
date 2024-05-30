import React from "react";
import Team from "../components/Team";
import Hero from "../components/Hero";
import NewsandEvents from "../components/NewsandEvents";
import About from "../components/About";
import Counts from "../components/Counts";
import WebTeam from "../components/WebTeam";
import TrainingandRecruitingPartners from "../components/TrainingandRecruitingPartners";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewsandEvents />
      <About />
      <Counts />
      <Team />
      <WebTeam />
      <TrainingandRecruitingPartners />
    </div>
  );
};

export default HomePage;
