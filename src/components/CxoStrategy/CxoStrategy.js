import React from "react";
// import Talent from "./Components/Talent";
import Continously from "./Components/Continously";
import Leverage from "./Components/Leverage";
import Differentiate from "./Components/Differentiate";
import NewCharge from "./Components/NewCharge";
import NewStep from "./Components/NewStep";
import NewTalent from "./Components/NewTalent";

function HomePage() {
  return (
    <>
      <Differentiate />
      <NewCharge />
      <NewStep />
      <NewTalent />
      {/* <Talent /> */}
      <Continously />
      <Leverage />
    </>
  );
}

export default HomePage;
