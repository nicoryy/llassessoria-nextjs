"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScroolTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <FaArrowUp
      onClick={() => scrollToTop()}
      className={`fixed bottom-10 right-10 z-50 bg-primary p-3 cursor-pointer rounded-md 
        transition duration-500 ease-in-out bg-opacity-80 ${
          isVisible ? "translate-x-0" : "translate-x-40"
        }`}
      size={40}
      color="white"
    />
  );
};

export default ScroolTop;
