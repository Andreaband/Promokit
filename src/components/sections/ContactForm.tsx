"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aggiungi la logica di invio del form
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-purple-500 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Contattaci</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Messaggio</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500"
      >
        Invia
      </button>
    </form>
  );
}
