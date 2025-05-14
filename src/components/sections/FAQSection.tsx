"use client";

import { useState, useEffect } from "react";

export default function FAQSection() {
  const defaultFaqs = [
    { question: "Cos'è PromoKit?", answer: "PromoKit è uno strumento per creare landing page pubblicitarie in pochi minuti." },
    { question: "È gratuito?", answer: "PromoKit offre una versione gratuita con funzionalità base." },
    { question: "Posso fare test A/B?", answer: "Sì, puoi testare diverse varianti delle tue campagne con facilità." },
  ];

  const [faqs, setFaqs] = useState(defaultFaqs);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Carica da localStorage
  useEffect(() => {
    const storedFaqs = localStorage.getItem("faqs");
    if (storedFaqs) {
      setFaqs(JSON.parse(storedFaqs));
    }
  }, []);

  // Salva su localStorage
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);

  // Toggle accordion
  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Gestione modifiche
  const handleChange = (index: number, field: "question" | "answer", value: string) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  // Aggiungi FAQ
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  // Rimuovi FAQ
  const removeFaq = (index: number) => {
    const updatedFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(updatedFaqs);
    setOpenIndexes((prev) => prev.filter((i) => i !== index));
  };

  // Reset FAQ
  const resetFaqs = () => {
    setFaqs(defaultFaqs);
    setOpenIndexes([]);
    localStorage.setItem("faqs", JSON.stringify(defaultFaqs));
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">FAQ - Domande Frequenti</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded shadow-sm overflow-hidden">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition"
          >
            <span className="font-medium">{faq.question || "Nuova domanda"}</span>
          </button>

          {openIndexes.includes(index) && (
            <div className="p-4 bg-white border-t">
              <input
                type="text"
                value={faq.question}
                onChange={(e) => handleChange(index, "question", e.target.value)}
                placeholder="Domanda"
                className="w-full p-2 mb-2 border rounded"
              />
              <textarea
                value={faq.answer}
                onChange={(e) => handleChange(index, "answer", e.target.value)}
                placeholder="Risposta"
                className="w-full p-2 border rounded"
              />
              <button
                onClick={() => removeFaq(index)}
                className="mt-2 text-red-600 text-sm underline"
              >
                Rimuovi
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="mt-6 flex gap-4">
        <button
          onClick={addFaq}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Aggiungi domanda
        </button>
        <button
          onClick={resetFaqs}
          className="bg-red-600 text-white py-2 px-4 rounded"
        >
          Reset FAQ
        </button>
      </div>
    </section>
  );
}
