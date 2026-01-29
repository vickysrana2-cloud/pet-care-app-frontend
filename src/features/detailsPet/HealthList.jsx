import React, { useState } from "react";
import HealthCard from "./HealthCard";
import AddHealthForm from "../actionForms/AddHealthForm";
import {
  addHealthData,
  updateHealthData,
  deleteHealthData,
} from "../../services/healthService";

const HealthList = ({ petId, healthList, setHealthList }) => {
  const [showForm, setShowForm] = useState(false);
  const [healthToEdit, setHealthToEdit] = useState(null);

  const handleAddClick = () => {
    setHealthToEdit(null);
    setShowForm(true);
  };

  const handleUpdateClick = (health) => {
    setHealthToEdit(health);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setHealthToEdit(null);
  };

  // ADD / UPDATE 
  const handleSubmit = async (formData) => {
    try {
      if (healthToEdit) {
        const updatedHealth = await updateHealthData(
          petId,
          healthToEdit.id,
          formData
        );

        setHealthList((prev) =>
          prev.map((h) =>
            h.id === healthToEdit.id ? updatedHealth : h
          )
        );
      } else {
        const newHealth = await addHealthData(petId, formData);
        setHealthList((prev) => [newHealth, ...prev]);
      }
    } catch (error) {
      console.error("Failed to save health record", error);
    } finally {
      handleClose();
    }
  };

  // DELETE — OPTIMISTIC UI
  const handleDelete = async (healthId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this health record?"
    );
    if (!confirmDelete) return;

    // backup for rollback
    const previousList = [...healthList];

    // optimistic remove
    setHealthList((prev) =>
      prev.filter((h) => h.id !== healthId)
    );

    try {
      await deleteHealthData(petId, healthId);
    } catch (error) {
      console.error("Delete failed", error);

      // rollback
      setHealthList(previousList);
      alert("Failed to delete health record");
    }
  };

  return (
    <div className="p-4 bg-amber-50 rounded-xl relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-amber-900">
          Health Records
        </h3>

        <button
          onClick={handleAddClick}
          className="px-4 py-2 text-sm font-medium text-white 
                     bg-amber-500 rounded-lg 
                     hover:bg-amber-600 transition shadow-sm"
        >
          + Add Health
        </button>
      </div>

      {/* List */}
      {healthList && healthList.length > 0 ? (
        <div className="space-y-4">
          {healthList.map((health) => (
            <HealthCard
              key={health.id}
              petId={petId}
              health={health}
              onUpdate={handleUpdateClick}
              onDelete={handleDelete}   
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
          No health records found
        </p>
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <AddHealthForm
            initialData={healthToEdit}
            onSubmit={handleSubmit}
            onCancel={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default HealthList;
