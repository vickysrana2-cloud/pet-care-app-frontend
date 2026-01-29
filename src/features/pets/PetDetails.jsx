import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPetDetailsByPetIdAndUserId } from "../../services/petDetailService";
import { deleteByPetIdAndUserId } from "../../services/petService";
import PetForm from "./PetForm";


import {
  FaBell,
  FaHeartbeat,
  FaUtensils,
} from "react-icons/fa";
import HealthList from "../detailsPet/HealthList";
import FeedingList from "../detailsPet/FeedingList";
import ReminderList from "../detailsPet/ReminderList";

const PetDetails = () => {
  const [healthList, setHealthList] = useState([]);
  const [feedingList, setFeedingList] = useState([]);
  const [reminderList, setReminderList] = useState([]);
  

  const [showEditForm, setShowEditForm] = useState(false);


  const [petData, setPetData] = useState(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("health");

  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  // console.log("PetDetails userId:", userId);

  const { id } = useParams();
  // console.log("PetDetails id:", id);

  useEffect(() => {
    const featchPetDetails = async () => {
      try {
        const data = await getPetDetailsByPetIdAndUserId(userId, id);
        setPetData(data);
        setHealthList(data.healthRecords || []);
        setFeedingList(data.feedings || []);
        setReminderList(data.reminders || []);
      } catch (error) {
        console.error("Failed to fetch petData details", error);
      }
    };

    featchPetDetails();
  }, [userId, id]);

  // console.log("PetDetails petData:", petData);
  // console.log("PetId :", petData?.petId);

  const handleDeletePet = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this pet? This action cannot be undone."
  );

  if (!confirmDelete) return;

  try {
    await deleteByPetIdAndUserId(petData.petId, userId);
    alert("Pet deleted successfully 🐾");
    navigate(-1); 
  } catch (error) {
    console.error("Failed to delete pet", error);
    alert("Failed to delete pet");
  }
};


  return (
    <div className="min-h-screen bg-white rounded-l-[48px] shadow-2xl p-10 overflow-y-auto animate-in slide-in-from-right duration-500">
      {/* Back */}
      <div className="flex items-center justify-between mb-6">
  {/* Left side */}
  <button
    onClick={() => navigate(-1)}
    className="px-4 py-2 text-xl font-bold
               text-gray-700
                hover:text-amber-600 transition"
  >
    ← Back to Dashboard
  </button>

  {/* Right side */}
  <div className="flex items-center justify-between rounded-lg gap-4">

<button
  onClick={() => setShowEditForm(true)}
  className="px-4 py-2 text-sm font-medium
  text-amber-700 border border-green-400
  rounded-lg hover:bg-green-600 hover:text-white transition"
>
  Update Pet
</button>


  <button
    onClick={handleDeletePet}
    className="px-4 py-2 text-sm font-medium
    text-amber-700 border border-amber-300
    rounded-lg hover:bg-amber-500 hover:text-red-500 transition"
    >
    Delete Pet
  </button>
    </div>
</div>


      {/* Header */}
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <img
          src={
            petData?.photoUrl ||
            `https://loremflickr.com/400/400/pet?lock=${petData?.petId}`
          }
          alt={petData?.name}
          className="w-48 h-48 rounded-[40px] object-cover shadow-xl shadow-amber-200"
        />

        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-black text-amber-900">
              {petData?.name}
            </h1>
            <span className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full font-bold text-sm">
              {petData?.species} • {petData?.breed}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-3xl bg-amber-50 border border-amber-100">
              <p className="text-xs font-bold text-amber-600 uppercase">
                Birth
              </p>
              <p className="text-lg font-bold text-amber-900">
                {petData?.birthDate}
              </p>
            </div>

            <div className="p-4 rounded-3xl bg-orange-50 border border-orange-100">
              <p className="text-xs font-bold text-orange-600 uppercase">
                Weight
              </p>
              <p className="text-lg font-bold text-amber-900">
                {petData?.weight} kg
              </p>
            </div>

            <div className="p-4 rounded-3xl bg-green-50 border border-green-100">
              <p className="text-xs font-bold text-green-600 uppercase">
                Reminders
              </p>
              <p className="text-lg font-bold text-amber-900">
                {petData?.reminders?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-amber-100 mb-8">
        {[
          { id: "health", label: "Health", icon: FaHeartbeat },
          { id: "food", label: "Feeding", icon: FaUtensils },
          { id: "reminders", label: "Reminders", icon: FaBell },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 pb-4 font-bold transition ${
                isActive ? "text-amber-600" : "text-slate-400"
              }`}
            >
              <Icon />
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-600 rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Reminders */}
        {activeTab === "reminders" && (
          <div>
              <ReminderList
              petId={petData?.petId}
              reminderList={reminderList}
              setReminderList={setReminderList}
              />
          </div>
        )}

        {/* Health */}
        {activeTab === "health" && (
          <div>
              <HealthList
                petId={petData?.petId}
                healthList={healthList}
                setHealthList={setHealthList}
              />
          </div>
        )}

        {/* Feeding */}
        {activeTab === "food" && (
          <div>
              <FeedingList
                petId={petData?.petId}
                feedingList={feedingList}
                setFeedingList={setFeedingList}
              />
          </div>
        )}
      </div>

      {showEditForm && (
  <PetForm
    mode="edit"
    petId={petData.petId}
    initialData={petData}
    onClose={() => setShowEditForm(false)}
  />
)}

    </div>
  );
};

export default PetDetails;
