"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

interface EventButtonProps {
  title: string;
  date: string;
  imageList: {
    key: number;
    ref: StaticImageData;
  }[];
}

const EventButton = ({ title, date, imageList }: EventButtonProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button
        className="btn btn-primary text-primary-content"
        onClick={openModal}
      >
        Veja mais →
      </button>
      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box  max-w-[60rem]">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{date}</p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 place-items-center">
            {imageList.map((item) => {
              return (
                <Image
                  loading="lazy"
                  className="rounded-box w-80"
                  src={item.ref}
                  alt={title}
                  key={item.key}
                  width={300}
                  height={200}
                />
              );
            })}
          </div>

          <form method="dialog" className="modal-close">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
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
