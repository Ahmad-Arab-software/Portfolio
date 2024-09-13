import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import { AboutMe } from "./AboutMe.jsx";
import { Projects } from "./Projecten";
import { Contact } from "./Contact.jsx";
import "./cards.css";
import useWindowSize from "./useWindowSize.jsx";

const cards = [
  {
    id: "aboutMe",
    render: <AboutMe />,
  },
  {
    id: "projects",
    render: <Projects />,
  },
  {
    id: "contact",
    render: <Contact />,
  },
];

const App = () => {
  const { width, height } = useWindowSize();
  const [order, setOrder] = useState(() => cards.map((_, index) => index));
  const containerRef = useRef(null);
  const enableCards = width >= 1536;

  useEffect(() => {
    if (!enableCards) {
      setOrder(cards.map((_, index) => index));
    }
  }, [width]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!enableCards) return;
      if (containerRef.current && containerRef.current.contains(e.target)) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setOrder((prev) => [...prev.slice(1), prev[0]]);
        } else if (e.deltaY < 0) {
          setOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [width]);
  useEffect(() => {
    console.log(order.map((index) => cards[index].id));
  }, [order]);

  const switchToCard = (targetCard) => {
    setOrder((prev) =>
      prev.slice().sort((a, b) => {
        if (cards[a].id === targetCard) return -1;
        if (cards[b].id === targetCard) return 1;
        return 0;
      })
    );
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#1f2e13] min-h-screen flex flex-col items-center">
      {/* Navigation bar */}
      <nav className="w-full flex justify-center bg-[#1f2e13] py-4 text-[#f2fa9b] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
        <button
          href="#home"
          className="mx-2 sm:mx-3 md:mx-4 hover:text-yellow-300 p-2 sm:p-3 md:p-4"
          onClick={() => {
            if (enableCards) {
              switchToCard("aboutMe");
            } else {
              scrollToId("aboutMe");
            }
          }}
        >
          Home
        </button>
        <button
          className="mx-2 sm:mx-3 md:mx-4 hover:text-yellow-300 p-2 sm:p-3 md:p-4"
          onClick={() => {
            if (enableCards) {
              switchToCard("projects");
            } else {
              scrollToId("projects");
            }
          }}
        >
          Projecten
        </button>
        <button
          href="#contact"
          className="mx-2 sm:mx-3 md:mx-4 hover:text-yellow-300 p-2 sm:p-3 md:p-4"
          onClick={() => {
            if (enableCards) {
              switchToCard("contact");
            } else {
              scrollToId("contact");
            }
          }}
        >
          Contact
        </button>
      </nav>
      <div
        ref={containerRef}
        className="bg-transparent w-full h-full flex flex-col items-center justify-center gap-6 2xl:overflow-hidden 2xl:grid 2xl:justify-items-center"
        aria-label="Stacked cards container"
      >
        {order.map((index, position) => {
          return (
            <div
              key={cards[index].id}
              className={`w-10/12 h-max 2xl:col-start-1 2xl:row-start-1 flex items-center justify-center card`}
              style={
                enableCards
                  ? {
                      transform: `scaleX(${1 + position * 0.01}) scaleY(${
                        1 - position * 0.05
                      }) translateX(${position * 25}px)`,
                      zIndex: cards.length - position,
                      filter:
                        position === 0 ? "none" : `brightness(${1 - 0.3})`,
                    }
                  : {}
              }
            >
              {cards[index].render}
            </div>
          );
        })}
      </div>
      {/* <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <AboutMe />
        <Projects />
        <Contact />
      </div> */}
    </div>
  );
};

export default App;
