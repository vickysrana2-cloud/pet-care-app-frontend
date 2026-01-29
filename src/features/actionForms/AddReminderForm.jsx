import React, { useEffect, useState } from "react";

const AddReminderForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    reminderDate: "",
    notes: "",
  });

  // Prefill for update
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        reminderDate: initialData.reminderDate || "",
        notes: initialData.notes || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      
      <h3 className="text-lg font-semibold text-amber-900 mb-4">
        {initialData ? "Update Reminder" : "Add Reminder"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Vaccination reminder"
            required
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Reminder Date */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Reminder Date
          </label>
          <input
            type="date"
            name="reminderDate"
            value={formData.reminderDate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Give medicine after food"
            rows={3}
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium 
                       text-amber-700 border border-amber-300 
                       rounded-lg hover:bg-amber-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium 
                       text-white bg-amber-500 
                       rounded-lg hover:bg-amber-600 transition"
          >
            {initialData ? "Update" : "Save"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddReminderForm;
