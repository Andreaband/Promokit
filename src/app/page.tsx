"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import CallToAction from "@/components/sections/CallToAction";
import Testimonial from "@/components/sections/Testimonial";
import FeatureCard from "@/components/sections/FeatureCard";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  // Stato per Hero
  const [heroData, setHeroData] = useState({
    title: "Crea la tua landing pubblicitaria",
    subtitle: "Usa PromoKit per progettare e testare campagne visuali in pochi minuti.",
    imageUrl: "https://source.unsplash.com/featured/?marketing",
  });

  // Stato per Testimonial
  const [testimonialData, setTestimonialData] = useState({
    name: "Jane Doe",
    role: "Marketing Specialist",
    quote: "PromoKit ha cambiato il nostro approccio alla pubblicità online, rendendolo più veloce ed efficiente.",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  });

  // Lista di immagini di sfondo per Hero
  const backgroundImages = [
    "https://source.unsplash.com/1600x900/?marketing",
    "https://source.unsplash.com/1600x900/?business",
    "https://source.unsplash.com/1600x900/?technology",
    "https://source.unsplash.com/1600x900/?startup",
    "https://source.unsplash.com/1600x900/?design",
  ];

  // Funzione per caricare i dati da localStorage
  useEffect(() => {
    const storedHeroData = localStorage.getItem("heroData");
    const storedTestimonialData = localStorage.getItem("testimonialData");

    if (storedHeroData) {
      setHeroData(JSON.parse(storedHeroData));
    }
    if (storedTestimonialData) {
      setTestimonialData(JSON.parse(storedTestimonialData));
    }

    // Cambiare l'immagine di sfondo periodicamente
    let currentImageIndex = 0;
    const intervalId = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      setHeroData((prevData) => ({
        ...prevData,
        imageUrl: backgroundImages[currentImageIndex],
      }));
    }, 5000); // Cambia immagine ogni 5 secondi

    // Pulizia dell'intervallo quando il componente viene smontato
    return () => clearInterval(intervalId);
  }, []);

  // Funzione per salvare i dati in localStorage
  useEffect(() => {
    localStorage.setItem("heroData", JSON.stringify(heroData));
    localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
  }, [heroData, testimonialData]);

  // Gestire il cambiamento dei dati del Hero
  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroData({
      ...heroData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestire il cambiamento dei dati del Testimonial
  const handleTestimonialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestimonialData({
      ...testimonialData,
      [e.target.name]: e.target.value,
    });
  };

  // Funzione per resettare i dati a quelli predefiniti
  const resetHeroData = () => {
    setHeroData({
      title: "Crea la tua landing pubblicitaria",
      subtitle: "Usa PromoKit per progettare e testare campagne visuali in pochi minuti.",
      imageUrl: "https://source.unsplash.com/featured/?technology",
    });
    localStorage.setItem("heroData", JSON.stringify(heroData));
  };

  const resetTestimonialData = () => {
    setTestimonialData({
      name: "Jane Doe",
      role: "Marketing Specialist",
      quote: "PromoKit ha cambiato il nostro approccio alla pubblicità online, rendendolo più veloce ed efficiente.",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    });
    localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
  };

  return (
    <main>
      {/* Hero Section con sfondo dinamico */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        imageUrl={heroData.imageUrl}
      />

      {/* Controlli per modificare Hero */}
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Modifica Hero</h2>
        <div className="mb-4">
          <label className="block text-sm">Titolo</label>
          <input
            type="text"
            name="title"
            value={heroData.title}
            onChange={handleHeroChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Sottotitolo</label>
          <input
            type="text"
            name="subtitle"
            value={heroData.subtitle}
            onChange={handleHeroChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">URL Immagine</label>
          <input
            type="text"
            name="imageUrl"
            value={heroData.imageUrl}
            onChange={handleHeroChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Pulsante per resettare i dati Hero */}
        <button
          onClick={resetHeroData}
          className="bg-red-600 text-white py-2 px-4 rounded mt-4"
        >
          Reset Hero
        </button>
      </div>

      <hr className="border-t border-gray-200 my-8" />

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <FeatureCard
          title="Facile da usare"
          description="Strumenti intuitivi per progettare landing page in pochi click."
          icon="https://img.icons8.com/ios/452/brush.png"
        />
        <FeatureCard
          title="Design personalizzabile"
          description="Crea design unici adattabili a qualsiasi tipo di campagna."
          icon="https://img.icons8.com/ios/452/edit.png"
        />
        <FeatureCard
          title="Test A/B"
          description="Analizza facilmente la efficacia delle tue campagne con test A/B."
          icon="https://img.icons8.com/ios/452/poll.png"
        />
      </div>

      <hr className="border-t border-gray-200 my-8" />

      {/* Testimonial Section */}
      <Testimonial
        initialName={testimonialData.name}
        initialRole={testimonialData.role}
        initialQuote={testimonialData.quote}
        initialImageUrl={testimonialData.imageUrl}
      />

      {/* Pulsante per resettare i dati Testimonial */}
      <button
        onClick={resetTestimonialData}
        className="bg-red-600 text-white py-2 px-4 rounded mt-4"
      >
        Reset Testimonial
      </button>

      <hr className="border-t border-gray-200 my-8" />

      <ContactForm />

      <CallToAction
        text="Hai già un'idea? Inizia a costruire ora!"
        buttonText="Crea una sezione"
        onClick={() => alert("Work in progress 😎")}
      />
    </main>
  );
}
