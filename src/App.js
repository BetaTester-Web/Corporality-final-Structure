import "./App.css";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import StrategyConsultancy from "./components/StrategyConsultancy/StrategyConsultancy";
import CxoStrategy from "./components/CxoStrategy/CxoStrategy";
import IntractiveBluePrint from "./components/IntractiveBluePrint/IntractiveBluePrint";
import CorporateStrategy from "./components/CorporateStrategy/CorporateStrategy";
import BrandPositioning from "./components/BrandPositioning/BrandPositioning";
import AboutCorporality from "./components/AboutCorporality/AboutCorporality";
import PartnershipProgrammes from "./components/PartnershipProgrammes/PartnershipProgrammes.jsx";
import SustainableGrowth from "./components/SustainableGrowth/SustainableGrowth";
import Blogs from "./components/Blogs/Blogs";
import StrategyAndConsulting from "./components/StrategyAndConsulting/StrategyAndConsulting";
import InclusionAndDiversity from "./components/InclusionAndDiversity/InclusionAndDiversity";
import WorkWithClient from "./components/WorkWithClient/WorkWithClient";
import GoToMarketing from "./components/GoToMarketing/GoToMarketing";
import Contact from "./components/Contact/Contact";
import DigitalMediaMarketing from "./components/DigitalMediaMarketing/DigitalMediaMarketing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Blog from "./components/Blog/Blog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about-corporality" element={<AboutCorporality />} />

          <Route path="/blogs" element={<Blogs />}/>

          <Route path="/blog" element={<Blog />}/>

          <Route path="/brand-positioning" element={<BrandPositioning />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/corporate-strategy" element={<CorporateStrategy />} />

          <Route path="/cxo-strategy" element={<CxoStrategy />} />

          <Route path="/digital-media-marketing" element={<DigitalMediaMarketing />} />

          <Route path="/go-to-marketing" element={<GoToMarketing />} />

          <Route path="/inclusion-and-diversity" element={<InclusionAndDiversity />} />

          <Route path="/interactive-blueprint" element={<IntractiveBluePrint />} />

          <Route path="/login" element={<Login />} />

          <Route path="/partnership-programmes" element={<PartnershipProgrammes />} />

          <Route path="/register" element={<Register />} />

          <Route path="/strategy-and-consulting" element={<StrategyAndConsulting />} />

          <Route path="/strategic-consultancy" element={<StrategyConsultancy />} />

          <Route path="/sustainable-growth" element={<SustainableGrowth />} />

          <Route path="/work-with-clients" element={<WorkWithClient />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
