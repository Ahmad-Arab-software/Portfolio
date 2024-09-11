import React, { Suspense, useEffect } from "react";
import "./App.css";

import { AboutMe } from "./AboutMe";
import { Projects } from "./Projecten";

const App = () => {
  return (
    <div className="bg-[#1f2e13] min-h-screen flex flex-col items-center ">
      <nav className="fixed top-0 left-0 w-full flex justify-center bg-[#1f2e13] py-4 text-[#f2fa9b] text-6xl font-bold z-10">
        <a href="#home" className="mx-4 hover:text-yellow-300 p-4">
          Home
        </a>
        <a href="#projects" className="mx-4 hover:text-yellow-300 p-4">
          Projecten
        </a>
        <a href="#contact" className="mx-4 hover:text-yellow-300 p-4">
          Contact
        </a>
      </nav>
      {/* you can command this to view projecten */}
      <AboutMe />
      {/* <Projects /> */}
    </div>
  );
};

export default App;
