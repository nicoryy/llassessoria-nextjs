"use client";

import React, { useRef } from "react";

interface EventButtonProps {
  title: string;
  date: string;
}

const EventButton = ({ title, date }: EventButtonProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button className="btn btn-primary text-primary-content" onClick={openModal}>
        Veja mais →
      </button>
      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{date}</p>

          {/* quero aqui */}

          <form method="dialog" className="btn">
            <button>Fechar</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>X</button>
        </form>
      </dialog>
    </>
  );
};

export default EventButton;