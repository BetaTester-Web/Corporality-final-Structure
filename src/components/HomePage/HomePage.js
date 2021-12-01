import React, { useEffect } from "react";
import Services from "./Components/Services";
import WhyUs from "./Components/Whyus";
import EmotionalQuest from "./Components/EmotionalQuest";
import Library from "./Components/Library";
import NewBanner from "./Components/NewBanner.jsx";
import Banner2 from "./Components/Banner2.jsx";
import NewPhilosophy from "./Components/NewPhilosophy.jsx";
import NewPortfolio from "./Components/NewPortfolio";
import Caretojoinus from "./Components/CaretojoinUs/Caretojoinus";
import AOS from "aos";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      disable: "mobile",
    });
  }, []);
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
      <Caretojoinus />
    </>
  );
}

export default HomePage;
