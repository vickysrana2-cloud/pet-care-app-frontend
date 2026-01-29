import React from "react";
import ROpetCard from "./ROpetCard";

const ROpetGrid = () => {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      type: "dog",
      age: "2 years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
      description: "Friendly golden retriever who loves playing fetch and cuddles.",
      tags: ["Friendly", "Active", "Kid-friendly"],
    },
    {
      id: 2,
      name: "Luna",
      type: "cat",
      age: "3 years",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1514888286974-6d03bde4ba14",
      description: "Gentle and affectionate cat who enjoys sunny spots.",
      tags: ["Calm", "Independent", "Lap cat"],
    },
    {
      id: 3,
      name: "Thumper",
      type: "rabbit",
      age: "1 year",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1564323486978-cf9be6bf7c26",
      description: "Playful bunny who loves exploring and fresh veggies.",
      tags: ["Playful", "Gentle", "Herbivore"],
    },
    {
      id: 4,
      name: "Goldie",
      type: "fish",
      age: "6 months",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890",
      description: "Beautiful goldfish that brings peace and tranquility.",
      tags: ["Calming", "Low maintenance", "Colorful"],
    },
    {
      id: 5,
      name: "Sky",
      type: "bird",
      age: "8 months",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1480044965905-02098d419e96",
      description: "Colorful parrot who loves music and learning new sounds.",
      tags: ["Vocal", "Intelligent", "Colorful"],
    },
    {
      id: 6,
      name: "Max",
      type: "dog",
      age: "4 years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
      description: "Loyal German Shepherd who loves outdoor adventures.",
      tags: ["Protective", "Active", "Family-friendly"],
    },
  ];

  const handlePetClick = (pet) => {
    // console.log("Selected pet:", pet);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <ROpetCard
          key={pet.id}
          pet={pet}
          onClick={() => handlePetClick(pet)}
        />
      ))}
    </div>
  );
};

export default ROpetGrid;
