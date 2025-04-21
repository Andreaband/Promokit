"use client";

import Hero from "@/components/sections/Hero";
import CallToAction from "@/components/sections/CallToAction";

export default function HomeContent() {
  return (
    <main>
      <Hero
        title="Crea la tua landing pubblicitaria"
        subtitle="Usa PromoKit per progettare e testare campagne visuali in pochi minuti."
        imageUrl="https://source.unsplash.com/featured/?marketing"
      />
      <CallToAction
        text="Hai già un'idea? Inizia a costruire ora!"
        buttonText="Crea una sezione"
        onClick={() => alert("Work in progress 😎")}
      />
    </main>
  );
}
