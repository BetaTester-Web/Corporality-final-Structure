import React from "react";
import Services from "./Components/Services";
import WhyUs from "./Components/Whyus";
import EmotionalQuest from "./Components/EmotionalQuest";
import Library from "./Components/Library";
import Second from "./Components/SecondComponent/Second";
import Banner from "./Components/Banner";
import Portfolio from "./Components/Portfolio";
import Philosophy from "./Components/Philosophy";
import Banner2 from "./Components/Banner2";

function HomePage() {
  return (
    <>
      <Banner />
      <Banner2 />
      <Portfolio />
      <Philosophy />
      <Services />
      <WhyUs />
      <EmotionalQuest />
      <Library />
      <Second />
    </>
  );
}

export default HomePage;
