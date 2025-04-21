'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import Testimonial from '@/components/sections/Testimonial';

export default function BuilderPage() {
  const [visibleBlocks, setVisibleBlocks] = useState({
    hero: true,
    testimonial: true,
  });

  const [testimonialData, setTestimonialData] = useState({
    name: 'Jane Doe',
    role: 'Marketing Specialist',
    quote:
      'PromoKit ha cambiato il nostro approccio alla pubblicità online, rendendolo più veloce ed efficiente.',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  });

  const toggleBlock = (block: keyof typeof visibleBlocks) => {
    setVisibleBlocks((prev) => ({ ...prev, [block]: !prev[block] }));
  };

  return (
    <main className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Builder Landing Page</h1>

      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={visibleBlocks.hero}
            onChange={() => toggleBlock('hero')}
          />
          Mostra Hero
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={visibleBlocks.testimonial}
            onChange={() => toggleBlock('testimonial')}
          />
          Mostra Testimonial
        </label>
      </div>

      {visibleBlocks.hero && (
        <Hero
          title="Crea la tua landing pubblicitaria"
          subtitle="Usa PromoKit per progettare e testare campagne visuali in pochi minuti."
          imageUrl="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60"
        />
      )}

      {visibleBlocks.testimonial && (
        <>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="font-bold text-lg mb-2">Modifica Testimonial</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                value={testimonialData.name}
                onChange={(e) =>
                  setTestimonialData({ ...testimonialData, name: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Ruolo"
                value={testimonialData.role}
                onChange={(e) =>
                  setTestimonialData({ ...testimonialData, role: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="URL Immagine"
                value={testimonialData.imageUrl}
                onChange={(e) =>
                  setTestimonialData({
                    ...testimonialData,
                    imageUrl: e.target.value,
                  })
                }
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Citazione"
                value={testimonialData.quote}
                onChange={(e) =>
                  setTestimonialData({ ...testimonialData, quote: e.target.value })
                }
                className="border p-2 rounded col-span-1 sm:col-span-2"
              />
            </div>
          </div>

          <Testimonial initialName={''} initialRole={''} initialQuote={''} initialImageUrl={''} {...testimonialData} />
        </>
      )}
    </main>
  );
}
