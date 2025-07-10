import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero
        title="HI, I AM JULIA & I AM A SENIOR WEB DEVELOPER!!"
        desc="I am an freelance developer and designer remotely working
                globally. From 2020, I have been living in Thailand. I make
                useful applications for the web. In my spare times, I enjoy
                cooking, reading comics and travelling."
      />
      <ProjectCard />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;
