import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PetForm from "../pets/PetForm";

const DashboardHeader = () => {

  const [showAddPet, setShowAddPet]=useState(false);




  return (
    <>
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h2 className="text-3xl font-bold text-amber-900">
          Welcome back
        </h2>
        <p className="text-slate-500 font-medium">
          Here’s a quick overview of your pets today.
        </p>
      </div>

      <button
      onClick={() => setShowAddPet(true)}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-amber-200 transition active:scale-95"
      >
        <FaPlus className="w-4 h-4" />
        Add Pet
      </button>
    </header>
    {showAddPet && <PetForm onClose={() => setShowAddPet(false)} />}
    </>
  );
};

export default DashboardHeader;
