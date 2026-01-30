import React, { useState } from "react";
import { FaTimes, FaPlus } from "react-icons/fa";
import { addPet, updateByPetIdAndUserId } from "../../services/petService.jsx";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const PetForm = ({
  onClose,
  mode = "add",
  initialData = null,
  petId = null,
}) => {

  const navigate = useNavigate();

  const [message, setMessage] = useState({ text: "", type: "" });

const [formData, setFormData] = useState({
  name: "",
  species: "Dog",
  breed: "",
  birthDate: "",
  weight: "",
  photoUrl: "",
});

useEffect(() => {
  if (mode === "edit" && initialData) {
    setFormData({
      name: initialData.name || "",
      species: initialData.species || "Dog",
      breed: initialData.breed || "",
      birthDate: initialData.birthDate || "",
      weight: initialData.weight || "",
      photoUrl: initialData.photoUrl || "",
    });
  }
}, [mode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const userRes = JSON.parse(localStorage.getItem("user"), {});
  const userId = userRes.id;

  const payload = {
    name: formData.name,
    species: formData.species,
    breed: formData.breed,
    birthDate: formData.birthDate,
    weight: Number(formData.weight),
    photoUrl: formData.photoUrl,
  };

  try {
    if (mode === "add") {
      await addPet(
        { ...payload, healthRecords: [], reminders: [] },
        userId
      );
      setMessage({ text: "Pet added successfully!", type: "success" });
    } else {
      await updateByPetIdAndUserId(petId, userId, payload);
      setMessage({ text: "Pet updated successfully!", type: "success" });
    }
  } catch (error) {
    setMessage({
      text:
        mode === "add"
          ? "Pet adding failed."
          : "Pet update failed.",
      type: "error",
    });
  } finally {
    setTimeout(() => {
      setMessage({ text: "", type: "" });
      onClose();
      navigate(0);
    }, 1200);
  }
};


  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = today.toLocaleDateString("en-CA"); // YYYY-MM-DD

  return (
    <div className="fixed inset-0 z-50 h-full flex items-center justify-center bg-amber-900/20 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-amber-900">
  {mode === "add" ? "Add New Pet" : "Update Pet"}
</h2>


          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:bg-amber-50 hover:text-amber-600 transition"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-amber-800 mb-1.5">
              Pet Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="e.g. Buddy"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Species & Breed */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-1.5">
                Species
              </label>
              <select
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="w-full rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Rabbit</option>
                <option>Hamster</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-1.5">
                Breed
              </label>
              <input
                name="breed"
                type="text"
                required
                placeholder="e.g. Golden Retriever"
                value={formData.breed}
                onChange={handleChange}
                className="w-full rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Birth Date & Weight */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-1.5">
                Birth Date
              </label>
              <input
                name="birthDate"
                type="date"
                required
                max={maxDate}
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-1.5">
                Weight (kg)
              </label>
              <input
                name="weight"
                type="number"
                required
                step="0.1"
                min="0"
                value={formData.weight}
                onChange={handleChange}
                className="w-full rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-amber-800 mb-1.5">
              Photo URL (optional)
            </label>
            <input
              name="photoUrl"
              type="text"
              placeholder="https://example.com/image.jpg"
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {message.text && (
            <div
              className={`text-center text-sm font-semibold py-3 rounded-xl ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit */}
          <button
  type="submit"
  className="w-full flex items-center justify-center gap-2 
             bg-amber-500 hover:bg-amber-600 text-white 
             font-bold py-4 rounded-2xl shadow-lg transition"
>
  {mode === "add" ? <FaPlus /> : <FaCheck />}
  {mode === "add" ? "Add Pet" : "Update Pet"}
</button>

        </form>
      </div>
    </div>
  );
};

export default PetForm;
