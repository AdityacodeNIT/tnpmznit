import React from "react";
import Team from "../components/Team";
import Hero from "../components/Hero";
import NewsandEvents from "../components/NewsandEvents";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewsandEvents />
      <Team />
    </div>
  );
};

export default HomePage;
