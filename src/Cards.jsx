import React from "react";
import "./App.css";
import { AboutMe } from "./AboutMe.jsx";
import { Projects } from "./Projecten.jsx";
import { Contact } from "./Contact.jsx";
import { Cards } from "./Cards.jsx"; // Import the Cards component

const App = () => {
  return (
    <div className="bg-[#1f2e13] min-h-screen flex flex-col items-center">
      {/* Navigation bar */}
      <nav className="z-50 fixed top-0 left-0 w-full flex justify-center bg-[#1f2e13] py-4 text-[#f2fa9b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
        <a
          href="#home"
          className="mx-2 sm:mx-3 md:mx-4 hover:text-yellow-300 p-2 sm:p-3 md:p-4"
        >
          Home
        </a>
        <a
          href="#projects"
          className="mx-2 sm:mx-3 md:mx-4 hover:text-yellow-300 p-2 sm:p-3 md:p-4"
        >
          Projecten
        </a>
        <a
          href="#contact"
          className="mx-2 sm:mx-3 md:mx-4 hover:text-yellow-300 p-2 sm:p-3 md:p-4"
        >
          Contact
        </a>
      </nav>

      {/* Content sections */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 mt-16">
        {/* AboutMe Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Cards Section */}
        <Cards /> {/* Use the Cards component here */}
      </div>
    </div>
  );
};

export default App;
