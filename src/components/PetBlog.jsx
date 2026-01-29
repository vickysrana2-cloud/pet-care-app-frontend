import React from "react";
import { FaPaw, FaHeart, FaInfoCircle } from "react-icons/fa";

const PetBlog = () => {
  // Static / read-only pet data (can later come from API)
  const pet = {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    weight: "28 kg",
    personality: ["Friendly", "Playful", "Loyal"],
    description:
      "Buddy is a loving and energetic Golden Retriever who enjoys playing fetch, long walks, and spending time with people. He is gentle with children and gets along well with other pets.",
    careTips: [
      "Daily walks and playtime",
      "Balanced diet with proper hydration",
      "Regular grooming and brushing",
      "Routine vet checkups",
    ],
    healthInfo:
      "Buddy is fully vaccinated and in excellent health. Regular exercise is recommended to maintain his fitness.",
    image: "/hero-pet.jpg",
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FaPaw className="text-amber-500 text-3xl" />
        <h1 className="text-4xl font-black text-gray-900">
          {pet.name}
        </h1>
      </div>

      {/* Image */}
      <div className="mb-10">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full max-h-100 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Species", value: pet.species },
          { label: "Breed", value: pet.breed },
          { label: "Age", value: pet.age },
          { label: "Weight", value: pet.weight },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-amber-50 rounded-2xl p-5 text-center"
          >
            <div className="text-sm text-gray-500">{item.label}</div>
            <div className="text-lg font-bold text-amber-700">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaInfoCircle className="text-amber-500" />
          About {pet.name}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {pet.description}
        </p>
      </div>

      {/* Personality */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaHeart className="text-rose-500" />
          Personality Traits
        </h2>

        <div className="flex flex-wrap gap-3">
          {pet.personality.map((trait) => (
            <span
              key={trait}
              className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Care Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Care & Daily Needs
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {pet.careTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Health Information */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Health Information
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {pet.healthInfo}
        </p>
      </div>
    </section>
  );
};

export default PetBlog;
