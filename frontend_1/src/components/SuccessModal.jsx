import React from "react";

const SuccessModal = ({ isOpen, onClose, title = "Verified!", message = "Your details have been successfully verified.\nYou're all set to continue." }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/30 p-4">
      <div className="bg-white rounded-3xl shadow-2xl px-10 py-10 flex flex-col items-center gap-4 max-w-sm w-full mx-4 animate-[fadeInScale_0.3s_ease-out]">
        
        {/* Animated checkmark circle */}
        <div className="w-20 h-20 rounded-full bg-teal-50 border-4 border-teal-500 flex items-center justify-center">
          <svg className="w-10 h-10 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center">{title}</h2>
        <p className="text-gray-500 text-center text-sm leading-relaxed whitespace-pre-line">
          {message}
        </p>

        <button
          onClick={onClose}
          className="mt-2 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
