// src/components/sections/FeatureCard.tsx

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string; // URL dell'icona
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-200 shadow-lg rounded-xl p-6 text-center">
      {/* Icona */}
      <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
      {/* Titolo */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {/* Descrizione */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
