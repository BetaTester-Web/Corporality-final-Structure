import React from "react";
import First from "./components/Firstcomponent/First";
import Prev4 from "./components/prev-4/Prev4";
import Prev2 from "./components/Prev-second/Prev2";
import Prev3 from "./components/prev-third/prev3";
import Prev1 from "./components/prevCode-1/Prev1";
import Second from "./components/SecondComponent/Second";



function HomePage() {
  return (
    <>
        <Prev1 />
        <Prev2 />
        
        <Prev4 />
        <Prev3 />
        <First />
        <Second />
    </>
  );
}

export default HomePage;
