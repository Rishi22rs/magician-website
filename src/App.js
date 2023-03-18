import "./App.css";
import BirthdayParties from "./Components/BirthdayParties";
import Home from "./Components/Home";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import TelevisionAppearances from "./Components/TelevisionAppearances";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div style={{ position: "relative", overflowX: "hidden" }}>
        <Home />
        <Navbar />
        <Intro />
        <TelevisionAppearances />
        <BirthdayParties />
        <Gallery />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
