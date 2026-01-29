import React, { useEffect, useState } from "react";

const AddFeedingForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    time: "",
  });

  // Prefill for update
  useEffect(() => {
    if (initialData) {
      setFormData({
        foodName: initialData.foodName || "",
        quantity: initialData.quantity || "",
        time: initialData.time || "",
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
        {initialData ? "Update Feeding Record" : "Add Feeding Record"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Food Name */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            placeholder="Rice, Dry Food, Milk"
            required
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="200g, 1 bowl"
            required
            className="w-full px-3 py-2 border border-amber-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
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

export default AddFeedingForm;
