import React, { useState, useEffect } from "react";
import { ImArrowUp2 } from "react-icons/im";
const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-5 right-5 md:right-10 
      md:bottom-10 text-3xl bg-white text-theme-2 
      rounded-full p-2 shadow-md shadow-gray-400 
      z-50 ${isVisible ? "visible" : "invisible"}`}
      onClick={handleClick}
    >
      <ImArrowUp2 />
    </button>
  );
};

export default GoToTopButton;
