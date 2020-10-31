import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
import Header from "../Header/Header";
import DevHero from "../DevHero/DevHero";
import Spacer150 from "../Spacers/Spacer150";
import DownArrow from "../Spacers/DownArrow";

function Portfolio() {
  return (
      <div>
        <Header />
        <Spacer150 />
        <DevHero />
        <DownArrow />
        <ProjectCards />
      </div>
  );
}

export default Portfolio;
