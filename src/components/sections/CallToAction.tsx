// src/components/sections/CallToAction.tsx
"use client";

type CTAProps = {
  text: string;
  buttonText: string;
  onClick: () => void;
};

export default function CallToAction({ text, buttonText, onClick }: CTAProps) {
  return (
    <section className="bg-green-600 text-white py-8 px-6 text-center rounded-xl m-4">
      <p className="text-xl mb-4">{text}</p>
      <button
        onClick={onClick}
        className="bg-white text-green-600 font-semibold py-2 px-4 rounded hover:bg-green-100 transition"
      >
        {buttonText}
      </button>
    </section>
  );
}
