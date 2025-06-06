"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import CallToAction from "@/components/sections/CallToAction";
import Testimonial from "@/components/sections/Testimonial";
import FeatureCard from "@/components/sections/FeatureCard";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import Sidebar from "@/components/sections/Sidebar";

export default function Home() {
  const initialHeroData = {
  title: "Create your promotional landing page",
  subtitle: "Use PromoKit to design and test visual campaigns in minutes.",
  imageUrl: "https://source.unsplash.com/featured/?marketing",
};


  const initialTestimonialData = {
    name: "Jane Doe",
    role: "Marketing Specialist",
    quote: "PromoKit has revolutionized our online advertising, making it faster and more efficient.",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  };

  const initialFeatures = [
    {
      title:  "Easy to use",
      description:  "Intuitive tools to design landing pages in just a few clicks.",
      icon: "https://img.icons8.com/ios/452/brush.png",
    },
    {
      title: "Customizable design",
      description: "Create unique designs adaptable to any campaign type.",
      icon: "https://img.icons8.com/ios/452/edit.png",
    },
    {
      title: "A/B Testing",
      description: "Easily analyze the effectiveness of your campaigns with A/B tests.",
      icon: "https://img.icons8.com/ios/452/poll.png",
    },
  ];

  const [heroData, setHeroData] = useState(initialHeroData);
  const [testimonialData, setTestimonialData] = useState(initialTestimonialData);
  const [features, setFeatures] = useState(initialFeatures);

  const backgroundImages = [
    "https://source.unsplash.com/1600x900/?marketing",
    "https://source.unsplash.com/1600x900/?business",
    "https://source.unsplash.com/1600x900/?technology",
    "https://source.unsplash.com/1600x900/?startup",
    "https://source.unsplash.com/1600x900/?design",
  ];

  useEffect(() => {
    const storedHeroData = localStorage.getItem("heroData");
    const storedTestimonialData = localStorage.getItem("testimonialData");
    const storedFeatures = localStorage.getItem("features");

    if (storedHeroData) setHeroData(JSON.parse(storedHeroData));
    if (storedTestimonialData) setTestimonialData(JSON.parse(storedTestimonialData));
    if (storedFeatures) setFeatures(JSON.parse(storedFeatures));

    let currentImageIndex = 0;
    const intervalId = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      setHeroData((prev) => ({
        ...prev,
        imageUrl: backgroundImages[currentImageIndex],
      }));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem("heroData", JSON.stringify(heroData));
    localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
    localStorage.setItem("features", JSON.stringify(features));
  }, [heroData, testimonialData, features]);

  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeroData({ ...heroData, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index: number, field: 'title' | 'description' | 'icon', value: string) => {
  const updatedFeatures = [...features];
  updatedFeatures[index] = {
    ...updatedFeatures[index],
    [field]: value,
  };
  setFeatures(updatedFeatures);
};

  const handleReset = () => {
    setHeroData(initialHeroData);
    setTestimonialData(initialTestimonialData);
    setFeatures(initialFeatures);
    localStorage.removeItem("heroData");
    localStorage.removeItem("testimonialData");
    localStorage.removeItem("features");
  };

  const resetTestimonialData = () => {
    setTestimonialData(initialTestimonialData);
    localStorage.setItem("testimonialData", JSON.stringify(initialTestimonialData));
  };

  const resetFeatures = () => {
    setFeatures(initialFeatures);
    localStorage.setItem("features", JSON.stringify(initialFeatures));
  };

  return (
    <main className="md:ml-48">
      <Sidebar />

      {/* Hero Section */}
      <section id="hero">
        <Hero {...heroData} />
      </section>

      {/* Hero Editor */}
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Edit Hero</h2>
        {["title", "subtitle", "imageUrl"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={heroData[field as keyof typeof heroData]}
              onChange={handleHeroChange}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        ))}
        <button onClick={handleReset} className="bg-red-600 text-white py-2 px-4 rounded mt-4">
          Reset
        </button>
      </div>

      {/* Features Editor */}
      <section id="features" className="p-8">
        <h2 className="text-xl font-semibold mb-4">Edit Features</h2>
        {features.map((feature, index) => (
          <div key={index} className="mb-6 border p-4 rounded">
            {(["title", "description", "icon"] as const).map((field) => (
  <div key={field} className="mb-2">
    <label className="block text-sm capitalize">{field}</label>
    <input
      type="text"
      value={feature[field]}
      onChange={(e) => handleFeatureChange(index, field, e.target.value)}
      className="p-2 border border-gray-300 rounded w-full"
    />
  </div>
))}

          </div>
        ))}
        <button onClick={resetFeatures} className="bg-red-600 text-white py-2 px-4 rounded mt-4">
          Reset Features
        </button>
      </section>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Testimonial Section */}
      <section id="testimonial" className="p-8">
        <Testimonial
  initialName={testimonialData.name}
  initialRole={testimonialData.role}
  initialQuote={testimonialData.quote}
  initialImageUrl={testimonialData.imageUrl}
/>
        <button onClick={resetTestimonialData} className="bg-red-600 text-white py-2 px-4 rounded mt-4">
          Reset Testimonial
        </button>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-8">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8">
        <ContactForm />
      </section>

      {/* Call to Action */}
      <CallToAction
  text="Have an idea? Start building now!"
  buttonText="Create a section"
  onClick={() => alert("Work in progress 😎")}
/>

    </main>
  );
}
