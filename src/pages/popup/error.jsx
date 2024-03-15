import React, { useState, useEffect } from "react";

const ErrorPopup = ({ error, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-red-500 text-white px-6 py-4 rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex-col">
            <h1 className="text-lg font-semibold">Some Error Occured</h1>
            <p>{error}</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white text-2xl ml-4 mb-1"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
