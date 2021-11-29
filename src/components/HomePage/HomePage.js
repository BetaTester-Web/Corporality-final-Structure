import React from "react";
import Services from "./Components/Services";
import WhyUs from "./Components/Whyus";
import EmotionalQuest from "./Components/EmotionalQuest";
import Library from "./Components/Library";
import Second from "./Components/SecondComponent/Second";
import NewBanner from "./Components/NewBanner.jsx";
import Portfolio from "./Components/Portfolio";
import Banner2 from "./Components/Banner2";
import NewPhilosophy from "./Components/NewPhilosophy.jsx";
import NewPortfolio from "./Components/NewPortfolio";

function HomePage() {
  return (
    <>
      <NewBanner />
      <Banner2 />
      <NewPortfolio />
      <NewPhilosophy />
      <Services />
      <WhyUs />
      <EmotionalQuest />
      <Library />
      <Second />
    </>
  );
}

export default HomePage;
