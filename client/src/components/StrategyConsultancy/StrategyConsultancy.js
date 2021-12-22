import React from "react";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";


function HomePage() {
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-item-center">

      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
      
    </>
  );
}

export default HomePage;
