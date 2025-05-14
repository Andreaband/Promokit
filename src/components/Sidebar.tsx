"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Hero" },
    { id: "features", label: "Features" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contatti" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-48 bg-gray-900 text-white flex-col items-center py-8 space-y-6 shadow-lg">
        <h1 className="text-xl font-bold">PromoKit</h1>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="hover:text-blue-400 transition"
          >
            {section.label}
          </button>
        ))}
      </aside>

      {/* Hamburger Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 bg-white p-2 rounded shadow"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex-col items-start py-8 px-4 z-40 shadow-lg space-y-6">
          <h1 className="text-xl font-bold">PromoKit</h1>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="hover:text-blue-400 transition w-full text-left"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
