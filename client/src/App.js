import "./App.css";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context, ContextProvider } from "./context/Context";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import StrategyConsultancy from "./components/StrategyConsultancy/StrategyConsultancy";
import IntractiveBluePrint from "./components/IntractiveBluePrint/IntractiveBluePrint";
import CorporateStrategy from "./components/CorporateStrategy/CorporateStrategy";
import BrandPositioning from "./components/BrandPositioning/BrandPositioning";
import AboutCorporality from "./components/AboutCorporality/AboutCorporality";
import PartnershipProgrammes from "./components/PartnershipProgrammes/PartnershipProgrammes.jsx";
import SustainableGrowth from "./components/SustainableGrowth/SustainableGrowth";
import Blogs from "./components/Blogs/Blogs";
import CxoStrategy from "./components/CxoStrategy/CxoStrategy";
import StrategyAndConsulting from "./components/StrategyAndConsulting/StrategyAndConsulting";
import InclusionAndDiversity from "./components/InclusionAndDiversity/InclusionAndDiversity";
import WorkWithClient from "./components/WorkWithClient/WorkWithClient";
import GoToMarketing from "./components/GoToMarketing/GoToMarketing";
import Contact from "./components/Contact/Contact";
import DigitalMediaMarketing from "./components/DigitalMediaMarketing/DigitalMediaMarketing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Blog from "./components/Blog/Blog";
import Write from "./components/Write/Write";

function App() {
  const { user, dispatch } = useContext(Context);
  // const handleLogout = () => {
    // dispatch({ type: "LOGOUT" });
  // };
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          {/* {user && <h1 className="logout" onClick={handleLogout}>logout</h1>} */}
          <Routes>
            
            <Route path="/" element={<HomePage />} />

            <Route path="/about-corporality" element={<AboutCorporality />} />

            <Route path="/register" element={user ? <HomePage /> : <Register />} />
            
            <Route path="/login" element={user ? <HomePage /> : <Login />} />

            <Route path="/write" element={user ? <Write /> : <Register />} />

            <Route path="/blog" element={<Blogs />}/>

            <Route path="/brand-positioning" element={<BrandPositioning />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/corporate-strategy" element={<CorporateStrategy />} />

            <Route path="/digital-media-marketing" element={<DigitalMediaMarketing />} />

            <Route path="/go-to-marketing" element={<GoToMarketing />} />

            <Route path="/cxo-strategy" element={<CxoStrategy />} />

            <Route path="/inclusion-and-diversity" element={<InclusionAndDiversity />} />

            <Route path="/interactive-blueprint" element={<IntractiveBluePrint />} />

            <Route path="/partnership-programmes" element={<PartnershipProgrammes />} />

            <Route path="/strategy-and-consulting" element={<StrategyAndConsulting />} />

            <Route path="/strategic-consultancy" element={<StrategyConsultancy />} />

            <Route path="/sustainable-growth" element={<SustainableGrowth />} />

            <Route path="/work-with-clients" element={<WorkWithClient />} />

            <Route path="/search/:search_string" element={<Blogs />}/>
            
            <Route path="/articles/:article_name" element={<Blog />}/>
 
            <Route path="/:article_name" element={<Blog />}/>

          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
