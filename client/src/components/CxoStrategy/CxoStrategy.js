import React from "react";
// import Talent from "./Components/Talent";
import Continously from "./Components/Continously";
import Leverage from "./Components/Leverage";
import Differentiate from "./Components/Differentiate";
import NewCharge from "./Components/NewCharge";
import NewStep from "./Components/NewStep";
import NewLeverage from "./Components/NewLeverage";
import NewContinously from "./Components/NewContinously";
import NewTalent from "./Components/NewTalent";
import NewDifferentiate from "./Components/NewDifferentiate";


function HomePage() {
  return (
    <>
      <NewDifferentiate />
      {/* <Differentiate /> */}
      <NewCharge />
      <NewStep />
      <NewTalent />
      <NewContinously />
      <NewLeverage />
    </>
  );
}

export default HomePage;
