import React, { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Experience from './scenes/Experience';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Define a mapping of selectedPage values to corresponding tab title
    const tabTitleMap = {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    };

    // Set the tab title based on the selectedPage
    document.title = `VT Portfolio - ${tabTitleMap[selectedPage]}`;
  }, [selectedPage]);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}></Landing>
      </div>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto">
        <Experience />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
