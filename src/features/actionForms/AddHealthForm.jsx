import React, { useEffect, useState } from "react";

const AddHealthForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    date: "",
    vetName: "",
  });

  // Prefill for update
  useEffect(() => {
    if (initialData) {
      setFormData({
        type: initialData.type || "",
        description: initialData.description || "",
        date: initialData.date || "",
        vetName: initialData.vetName || "",
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
        {initialData ? "Update Health Record" : "Add Health Record"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Health Type
          </label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Vaccination, Surgery, Checkup"
            required
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Details about health record"
            required
            rows={3}
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Doctor Name */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Doctor Name
          </label>
          <input
            type="text"
            name="vetName"
            value={formData.vetName}
            onChange={handleChange}
            placeholder="Dr Sonam"
            required
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

export default AddHealthForm;
