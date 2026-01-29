import React from "react";
import {
  FaDog,
  FaCat,
  FaBirthdayCake,
  FaWeight,
  FaDove,
  FaPaw,
  FaBell,
  FaHeartbeat,
} from "react-icons/fa";
import { useState, useEffect } from "react";

import { getRemindersByPetId } from "../../services/reminderService";
import {getHealthByPetId} from "../../services/healthService";

const PetCard = ({ pet, onClick }) => {
  const { petId, name, species, breed, birthDate, weight, photoUrl } = pet;

  const [reminderCount, setReminderCount] = useState(0);
  const [healthCount, setHealthCount] = useState(0);

  // console.log("PetCard pet:", pet);

  // Calculate age
  const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years <= 0) return `${months} mo`;

    return `${years} yr ${months} mo`;
  };

  const age = birthDate ? calculateAge(birthDate) : "N/A";

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const reminders = await getRemindersByPetId(petId);
        const healthRecords = await getHealthByPetId(petId);
        // console.log("Fetched reminders:", reminders);
        // console.log("Fetched health records:", healthRecords);
        setReminderCount(reminders.length);
        setHealthCount(healthRecords.length);
      } catch (error) {
        console.error("Error fetching reminders:", error);
      }
    };

    fetchReminders();
  }, [petId]);


  // 🔹 Species Icon Mapper
  const speciesIcon = () => {
    switch (species) {
      case "Dog":
        return <FaDog className="text-amber-600" />;
      case "Cat":
        return <FaCat className="text-amber-600" />;
      case "Bird":
        return <FaDove className="text-amber-600" />;
      case "Rabbit":
        return <FaPaw className="text-amber-600" />;
      default:
        return <FaPaw className="text-amber-600" />;
    }
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-4 relative"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-2xl mb-4 bg-amber-100">
        <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Name & Species */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-amber-900">{name}</h3>
        {speciesIcon()}
      </div>

      {/* Breed */}
      <p className="text-sm text-slate-600 mb-3">
        Breed: <span className="font-semibold">{breed}</span>
      </p>

      {/* Details */}
      <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
        {/* Age with DOB hover */}
        <div className="flex items-center gap-2 group relative">
          <FaBirthdayCake className="text-amber-500" />
          <span>{age}</span>

          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-amber-400 text-black font-bold text-xs px-2 py-1 rounded-lg">
            DOB: {birthDate}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaWeight className="text-amber-500" />
          <span>{weight} kg</span>
        </div>
      </div>

      {/* Health & Reminder row */}
      <div className="flex items-center justify-between text-sm font-semibold mt-2">
        {/* Health */}
        <div className="flex items-center gap-2 text-green-700">
          <FaHeartbeat className="text-green-600" />
          <span>{healthCount} Health Records</span>
        </div>

        {/* Reminder */}

        <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
          <FaBell className="text-red-500" />
          <span>
            {reminderCount || 0} Reminder{reminderCount > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
