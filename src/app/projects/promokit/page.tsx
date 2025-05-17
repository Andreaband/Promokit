// pages/projects/promokit.tsx
export default function PromoKit() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">
      {/* Hero */}
     <section className="text-center space-y-8">
  <div className="space-y-4">
    <h1 className="text-4xl font-bold">PromoKit</h1>
    <p className="text-lg" style={{ color: "var(--foreground)" }}>
      A minimal landing page builder for marketers & creatives.
    </p>
  </div>

  {/* Main Mockup */}
  <img
    src="/images/mockup-portrait.png"
    alt="PromoKit Preview"
    className="rounded-2xl shadow-xl mx-auto max-w-[70%] md:max-w-[50%]"
  />
</section>


      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p style={{ color: "var(--foreground)" }}>
          PromoKit was built as a personal project to experiment with clean design systems, reusable components, and rapid landing page creation.
          The goal was to blend Tailwind's utility-first approach with a custom CSS variable-based design system.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Features & Design Choices</h2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: "var(--foreground)" }}>
          <li>Modular FAQ Section with localStorage persistence</li>
          <li>Minimal Contact Form with improved UX & soft shadows</li>
          <li>Custom CSS Variables for light/dark theming</li>
          <li>Call-To-Action blocks optimized for conversions</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tech Stack & Challenges</h2>
        <p style={{ color: "var(--foreground)" }}>
          Built with Next.js, TailwindCSS, and custom CSS variables. One of the main challenges was harmonizing Tailwind utilities
          with global styles, ensuring design consistency while keeping flexibility for future scaling.
        </p>
      </section>

      {/* Gallery */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">UI Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src="/images/promokit-hero.png" alt="Feature Card" className="rounded-lg shadow" />
          <img src="/images/promokit-feature.png" alt="FAQ Section" className="rounded-lg shadow" />
          <img src="/images/promokit-contact.png" alt="Contact Form" className="rounded-lg shadow" />
          <img src="/images/promokit-testimonial.png" alt="Call to Action" className="rounded-lg shadow" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Want to collaborate?</h2>
        <p style={{ color: "var(--foreground)" }}>
          I'm open to freelance projects, collaborations, and new opportunities in frontend & UX design.
        </p>
        <a
          href="https://www.linkedin.com/in/andreabanducci/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--accent)] text-white py-3 px-6 rounded-lg shadow hover:opacity-90"
        >
          Connect on LinkedIn
        </a>
      </section>
    </main>
  );
}
