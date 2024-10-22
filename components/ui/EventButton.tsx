"use client";

import React, { useState } from "react";

const EventButton = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center gap-2 w-24 relative border-ppwoodland text-sm"
        onClick={handleClick}
      >
        <p className="text-sm text-primary font-bold ">Veja mais →</p>
      </button>
      
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={handleClose}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
            {title}
          </div>
          <button
            className="absolute top-5 right-5 text-white bg-primary px-5 py-2 rounded-md"
            onClick={handleClose}
          >
            Fechar
          </button>
        </div>
      )}
    </>
  );
};

export default EventButton;

