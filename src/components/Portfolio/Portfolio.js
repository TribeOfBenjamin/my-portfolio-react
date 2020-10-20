import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
import Header from "../Header/Header";
import DevHero from "../DevHero/DevHero";
import Spacer150 from "../Spacers/Spacer150";
import Spacer300 from "../Spacers/Spacer300";

function Portfolio() {
  return (
      <div>
        <Header />
        <Spacer150 />
        <DevHero />
        <Spacer300 />
        <ProjectCards />
      </div>
  );
}

export default Portfolio;
