"use client";

import { useState, useEffect } from "react";

export default function FAQSection() {
  const defaultFaqs = [
    { question: "What is PromoKit?", answer: "PromoKit helps you create and test visual landing pages for advertising campaigns." },
    { question: "Do I need design skills to use PromoKit?", answer: "No, PromoKit is user-friendly and requires no prior design experience." },
    { question: "Can I perform A/B testing with PromoKit?", answer: "Yes, PromoKit includes built-in A/B testing to optimize your campaigns." },
  ];

  const [faqs, setFaqs] = useState(defaultFaqs);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    const storedFaqs = localStorage.getItem("faqs");
    if (storedFaqs) setFaqs(JSON.parse(storedFaqs));
  }, []);

  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }, [faqs]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleChange = (index: number, field: "question" | "answer", value: string) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
    setOpenIndexes((prev) => prev.filter((i) => i !== index));
  };

  const resetFaqs = () => {
    setFaqs(defaultFaqs);
    setOpenIndexes([]);
  };

  return (
    <section>
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className={`card ${openIndexes.includes(index) ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question || "New question"}
          </div>

          {openIndexes.includes(index) && (
            <div className="faq-answer">
              <input
                type="text"
                value={faq.question}
                onChange={(e) => handleChange(index, "question", e.target.value)}
                placeholder="Question"
              />
              <textarea
                value={faq.answer}
                onChange={(e) => handleChange(index, "answer", e.target.value)}
                placeholder="Answer"
              />
              <button onClick={() => removeFaq(index)} className="danger">
                Remove
              </button>
            </div>
          )}
        </div>
      ))}

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={addFaq}>Add question</button>
        <button onClick={resetFaqs} className="danger">Reset FAQ</button>
      </div>
    </section>
  );
}
