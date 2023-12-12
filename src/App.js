/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
// import Skills from "./components/Skills/Skills";
// import ScrollToTop from "./hooks/ScrollToTop.jsx";
// import UseScrollToTop from "./hooks/useScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      {/* <ScrollToTop /> */}
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        {/* <Skills /> */}
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
      {/* <UseScrollToTop /> */}
    </div>
  );
}

export default App;
