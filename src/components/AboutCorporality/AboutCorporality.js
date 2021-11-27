import React from "react";
import FirstNew from "./Components/OurImpetus/FirstNew";
import Quote from "./Components/Quote/Quote";
import Leadership from "./Components/Leadership/Leadership";
import CommunitySupport from "./Components/CommunitySupport/CommunitySupport";
import ThreeBoxes from "./Components/ThreeBoxes/ThreeBoxes";
import FearlessCreativity from "./Components/FearlessCreativity/FearlessCreativity";
import WorkParallax from "./Components/MiddleParallax/WorkParallax";
import WorldMap from "./Components/WorldMap/WorldMap";
import Caretojoinus from "./Components/CaretojoinUs/Caretojoinus";

function AboutCorporality() {
  return (
    <>
      <FirstNew />
      <Quote />
      <ThreeBoxes />
      <FearlessCreativity />
      <WorkParallax />
      <WorldMap />
      <CommunitySupport />
      <Leadership />
      <Caretojoinus />
    </>
  );
}

export default AboutCorporality;
