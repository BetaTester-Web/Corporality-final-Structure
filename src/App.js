import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StrategyConsultancy from './components/StrategyConsultancy/StrategyConsultancy';
import CxoStrategy from './components/CxoStrategy/CxoStrategy';
import IntractiveBluePrint from './components/IntractiveBluePrint/IntractiveBluePrint';
import CorporateStrategy from './components/CorporateStrategy/CorporateStrategy';
import BrandPositioning  from './components/BrandPositioning/BrandPositioning';
import PartnershipProgrammes from './components/PartnershipProgrammes/PartnershipProgrammes.jsx';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/StrategyConsultancy" element={<StrategyConsultancy />} />
          <Route path="/CxoStrategy" element={<CxoStrategy />} />
          <Route path="/IntractiveBluePrint" element={<IntractiveBluePrint />} />
          <Route path="/CorporateStrategy" element={<CorporateStrategy />} />
          <Route path="/BrandPositioning" element={<BrandPositioning />} />
          <Route path="/PartnershipProgrammes" element={<PartnershipProgrammes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
