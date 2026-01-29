import React, { useState } from "react";
import ReminderCard from "./ReminderCard";
import AddReminderForm from "../actionForms/AddReminderForm";
import {
  addReminderData,
  updateReminderData,
  deleteReminderData,
} from "../../services/reminderService";



const ReminderList = ({ petId, reminderList, setReminderList }) => {


  const [showForm, setShowForm] = useState(false);
  const [reminderToEdit, setReminderToEdit] = useState(null);

  const handleAddClick = () => {
    setReminderToEdit(null);
    setShowForm(true);
  };

  const handleUpdateClick = (reminder) => {
    setReminderToEdit(reminder);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setReminderToEdit(null);
  };

  // ADD / UPDATE
  const handleSubmit = async (formData) => {
    try {
      if (reminderToEdit) {
        const updatedReminder = await updateReminderData(
          petId,
          reminderToEdit.id,
          formData
        );

        setReminderList((prev) =>
          prev.map((r) =>
            r.id === reminderToEdit.id ? updatedReminder : r
          )
        );
      } else {
        const newReminder = await addReminderData(petId, formData);
        setReminderList((prev) => [newReminder, ...prev]);
      }
    } catch (error) {
      console.error("Failed to save reminder", error);
    } finally {
      handleClose();
    }
  };

  // DELETE — OPTIMISTIC UI
  const handleDelete = async (reminderId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reminder?"
    );
    if (!confirmDelete) return;

    const previousList = [...reminderList];

    setReminderList((prev) =>
      prev.filter((r) => r.id !== reminderId)
    );

    try {
      await deleteReminderData(petId, reminderId);
    } catch (error) {
      console.error("Delete failed", error);
      setReminderList(previousList);
      alert("Failed to delete reminder");
    }
  };

  return (
    <div className="p-4 bg-amber-50 rounded-xl relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-amber-900">
          Reminders
        </h3>

        <button
          onClick={handleAddClick}
          className="px-4 py-2 text-sm font-medium text-white 
                     bg-amber-500 rounded-lg 
                     hover:bg-amber-600 transition shadow-sm"
        >
          + Add Reminder
        </button>
      </div>

      {/* List */}
      {reminderList && reminderList.length > 0 ? (
        <div className="space-y-4">
          {reminderList.map((reminder) => (
            <ReminderCard
              key={reminder.id}
              reminder={reminder}
              onUpdate={handleUpdateClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
          No reminders found
        </p>
      )}

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <AddReminderForm
            initialData={reminderToEdit}
            onSubmit={handleSubmit}
            onCancel={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default ReminderList;
