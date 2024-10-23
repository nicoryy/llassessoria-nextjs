"use client";

import { useState } from "react";

const EventButton = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open modal */}
      <button onClick={toggleModal} className="btn btn-primary">
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello, DaisyUI Modal in TSX!</h3>
            <p className="py-4">
              This is a simple modal example using DaisyUI and TSX.
            </p>

            <div className="modal-action">
              {/* Button to close modal */}
              <button onClick={toggleModal} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventButton;
