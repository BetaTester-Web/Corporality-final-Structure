import React from "react";

// import Talent from "./Components/Talent";
import Charge from "./Components/Charge";
import Step from "./Components/Step";
import Continously from "./Components/Continously";
import Leverage from "./Components/Leverage";
import Differentiate from "./Components/Differentiate";

function HomePage() {
  return (
    <>
      <Differentiate />
      <Charge />
      <Step />
      {/* <Talent /> */}
      <Continously />
      <Leverage />
    </>
  );
}

export default HomePage;
