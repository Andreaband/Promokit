// src/components/sections/CallToAction.tsx
"use client";

type CallToActionProps = {
  text: string;
  buttonText: string;
  onClick: () => void;
};

export default function CallToAction({ text, buttonText, onClick }: CallToActionProps) {
  return (
    <div className="bg-black-100 text-center p-6 rounded-xl shadow">
      <p className="text-lg mb-4">{text}</p>
      <button
        onClick={onClick}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}

