import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import StrategyConsultancy from "./components/StrategyConsultancy/StrategyConsultancy";
import CxoStrategy from "./components/CxoStrategy/CxoStrategy";
import IntractiveBluePrint from "./components/IntractiveBluePrint/IntractiveBluePrint";
import CorporateStrategy from "./components/CorporateStrategy/CorporateStrategy";
import BrandPositioning from "./components/BrandPositioning/BrandPositioning";
import AboutCorporality from "./components/AboutCorporality/AboutCorporality";
import PartnershipProgrammes from "./components/PartnershipProgrammes/PartnershipProgrammes.jsx";
import SustainableGrowth from "./components/SustainableGrowth/SustainableGrowth";
import StrategyAndConsulting from "./components/StrategyAndConsulting/StrategyAndConsulting";
import DigitalMediaMarketing from "./components/DigitalMediaMarketing/DigitalMediaMarketing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutCorporality" element={<AboutCorporality />} />
          <Route
            path="/StrategyConsultancy"
            element={<StrategyConsultancy />}
          />
          <Route path="/CxoStrategy" element={<CxoStrategy />} />
          <Route
            path="/InteractiveBluePrint"
            element={<IntractiveBluePrint />}
          />
          <Route
            path="/SustainableGrowth"
            element={<SustainableGrowth />}
          />
          
          <Route path="/CorporateStrategy" element={<CorporateStrategy />} />
          <Route path="/BrandPositioning" element={<BrandPositioning />} />

          <Route
            path="/PartnershipProgrammes"
            element={<PartnershipProgrammes />}
          />
          <Route path="/StrategyAndConsulting" element={<StrategyAndConsulting />} />
          <Route path="/DigitalMediaMarketing" element={<DigitalMediaMarketing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
