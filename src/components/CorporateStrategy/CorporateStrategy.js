import React from "react";

import AllCardsNew from "./Components/AllCardsNew/AllCardsNew";

import Client from "./Components/ClientFirstApproach";
import CorporateFirst from "./Components/CorporateBulb/CorporateFirst";
import Objectives from "./Components/Objectives";
import Parallax from "./Components/ParallaxSlide";

function CorporateStrategy() {
  return (
    <>
      <CorporateFirst />

      <AllCardsNew />
      <Client />
      <Parallax />
      <Objectives />
    </>
  );
}

export default CorporateStrategy;
