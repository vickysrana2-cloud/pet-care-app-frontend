import React from "react";
import { FaHeart, FaStar, FaUserPlus } from "react-icons/fa";

const features = [
  {
    icon: <FaHeart className="text-rose-500 text-2xl" />,
    title: "Health Tracking",
    description: "Track vaccinations, medications, and health milestones.",
  },
  {
    icon: <FaStar className="text-amber-500 text-2xl" />,
    title: "Smart Reminders",
    description: "Never miss feeding, walking, or vet appointments.",
  },
  {
    icon: <FaUserPlus className="text-blue-500 text-2xl" />,
    title: "Community Support",
    description: "Connect with pet parents and experts worldwide.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-linear-to-b from-white to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Everything Your <span className="text-amber-600">Pet Needs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built specifically for modern pet parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-linear-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
