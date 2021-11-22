import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
