import React from "react";

import Client from "./Components/ClientFirstApproach";
import CorporateFirst from "./Components/CorporateBulb/CorporateFirst";
import Objectives from "./Components/Objectives";
import Parallax from "./Components/ParallaxSlide";

function CorporateStrategy() {
  return (
    <>
      <CorporateFirst />
      <Client />
      <Parallax />
      <Objectives />
    </>
  );
}

export default CorporateStrategy;
