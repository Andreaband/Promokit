// src/components/sections/Testimonial.tsx
"use client";

import { useState } from "react";

type TestimonialProps = {
  initialName: string;
  initialRole: string;
  initialQuote: string;
  initialImageUrl: string;
};

export default function Testimonial({
  initialName,
  initialRole,
  initialQuote,
  initialImageUrl,
}: TestimonialProps) {
  const [name, setName] = useState(initialName);
  const [role, setRole] = useState(initialRole);
  const [quote, setQuote] = useState(initialQuote);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Logica di salvataggio (localStorage, API, ecc.)
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
      {isEditing ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Modifica Testimonianza</h2>
          <div className="space-y-4">
            <div>
              <label className="block">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full rounded"
                placeholder="Nome del Testimone"
              />
            </div>
            <div>
              <label className="block">Ruolo</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-2 w-full rounded"
                placeholder="Ruolo del Testimone"
              />
            </div>
            <div>
              <label className="block">Citazione</label>
              <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="border p-2 w-full rounded"
                placeholder="Citazione del Testimone"
              />
            </div>
            <div>
              <label className="block">Immagine URL</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="border p-2 w-full rounded"
                placeholder="URL dell'immagine del Testimone"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
            >
              Salva Testimonianza
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
          </div>
          <p className="italic mb-4">"{quote}"</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Modifica Testimonianza
          </button>
        </div>
      )}
    </div>
  );
}
