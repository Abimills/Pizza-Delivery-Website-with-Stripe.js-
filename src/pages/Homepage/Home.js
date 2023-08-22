import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import About from "../AboutPage/About";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
