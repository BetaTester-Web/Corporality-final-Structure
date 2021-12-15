import React from "react";

import Banner from "./Components/Banner";
import Blueprint from "./Components/Blueprint";
import CardsChart from "./Components/CardsChart/CardsChart";
import Revamping from "./Components/Revamping";
import Process from "./Components/Process";
import MarketingAudit from "./Components/MarketingAudit";
import KeyObject from "./Components/KeyObject";

function DigitalMediaMarketing() {
  return (
    <>
      <Banner />
      <CardsChart />

      <Revamping />
      <Blueprint />
      <Process />
      <MarketingAudit />
      <KeyObject />
    </>
  );
}

export default DigitalMediaMarketing;
