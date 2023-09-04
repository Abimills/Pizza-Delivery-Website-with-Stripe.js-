import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import About from "../AboutPage/About";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css"
import Service from "../ServicePage/Service";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <div>
     
      <LandingPage />
      <Menu />
      <About />
      <Service />
      <Contact />
    
    </div>
  );
};

export default Home;
