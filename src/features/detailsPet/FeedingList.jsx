import React, { useState } from "react";
import FeedingCard from "./FeedingCard";
import AddFeedingForm from "../actionForms/AddFeedingForm";
import {
  addFeedingData,
  updateFeedingData,
  deleteFeedingData,
} from "../../services/feedingService";

const FeedingList = ({ petId, feedingList, setFeedingList }) => {
  const [showForm, setShowForm] = useState(false);
  const [feedingToEdit, setFeedingToEdit] = useState(null);

  const handleAddClick = () => {
    setFeedingToEdit(null);
    setShowForm(true);
  };

  const handleUpdateClick = (feeding) => {
    setFeedingToEdit(feeding);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setFeedingToEdit(null);
  };

  // ADD / UPDATE
  const handleSubmit = async (formData) => {
    try {
      if (feedingToEdit) {
        const updatedFeeding = await updateFeedingData(
          petId,
          feedingToEdit.id,
          formData
        );

        setFeedingList((prev) =>
          prev.map((f) =>
            f.id === feedingToEdit.id ? updatedFeeding : f
          )
        );
      } else {
        const newFeeding = await addFeedingData(petId, formData);
        setFeedingList((prev) => [newFeeding, ...prev]);
      }
    } catch (error) {
      console.error("Failed to save feeding record", error);
    } finally {
      handleClose();
    }
  };

  // DELETE — OPTIMISTIC UI
  const handleDelete = async (feedingId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feeding record?"
    );
    if (!confirmDelete) return;

    const previousList = [...feedingList];

    setFeedingList((prev) =>
      prev.filter((f) => f.id !== feedingId)
    );

    try {
      await deleteFeedingData(petId, feedingId);
    } catch (error) {
      console.error("Delete failed", error);
      setFeedingList(previousList);
      alert("Failed to delete feeding record");
    }
  };

  return (
    <div className="p-4 bg-amber-50 rounded-xl relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-amber-900">
          Feeding Records
        </h3>

        <button
          onClick={handleAddClick}
          className="px-4 py-2 text-sm font-medium text-white 
                     bg-amber-500 rounded-lg 
                     hover:bg-amber-600 transition shadow-sm"
        >
          + Add Feeding
        </button>
      </div>

      {/* List */}
      {feedingList && feedingList.length > 0 ? (
        <div className="space-y-4">
          {feedingList.map((feeding) => (
            <FeedingCard
              key={feeding.id}
              petId={petId}
              feeding={feeding}
              onUpdate={handleUpdateClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
          No feeding records found
        </p>
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <AddFeedingForm
            initialData={feedingToEdit}
            onSubmit={handleSubmit}
            onCancel={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default FeedingList;
