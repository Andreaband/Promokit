// src/components/sections/Hero.tsx
"use client";
import { useEffect, useState } from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string; // non più obbligatoria
};

export default function Hero({ title, subtitle, imageUrl }: HeroProps) {
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  ];

  const [currentImage, setCurrentImage] = useState(imageUrl || images[0]);
  const [fade, setFade] = useState(false);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // inizio dissolvenza
      setTimeout(() => {
        index = (index + 1) % images.length;
        setCurrentImage(images[index]);
        setFade(false); // fine dissolvenza
      }, 500);
    }, 5000); // ogni 5 secondi

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${currentImage})` }}
      />
      <div className="relative z-10 bg-black/60 p-6 rounded">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
