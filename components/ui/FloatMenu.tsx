"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import ThemeController from "../util/ThemeController";

const FloatMenu = () => {
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
    <section
      className={`fixed bottom-10 right-10 z-50 transition duration-500 ease-in-out bg-opacity-80 flex flex-col gap-3 ${
        isVisible ? "translate-x-0" : "translate-x-40"
      }`}
    >
      <FaArrowUp
        onClick={() => scrollToTop()}
        className="bg-primary p-3 cursor-pointer rounded-md "
        size={40}
        color="white"
      />

      <ThemeController classNameProp="bg-primary p-3 cursor-pointer rounded-md size text-white" />
    </section>
  );
};

export default FloatMenu;
