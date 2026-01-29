import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import { getAllPetsByUserId } from "../../services/petService";
import { useNavigate } from "react-router-dom";

const PetGrid = () => {

  const navigate = useNavigate();

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) return;

    const fetchPets = async () => {
      try {
        const response = await getAllPetsByUserId(userId);
        setPets(response);
      } catch (error) {
        console.error("Failed to fetch pets:", error);
      }
    };

    fetchPets();
  }, []);

  const handlePetClick = (pet) => {
    navigate(`/dashboardpage/pets/${pet.petId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <PetCard
          key={pet.petId}
          pet={pet}
          onClick={() => handlePetClick(pet)}
        />
      ))}
    </div>
  );
};

export default PetGrid;
