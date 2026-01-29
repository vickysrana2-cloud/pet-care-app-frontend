import React from "react";

const ReminderCard = ({ reminder, onUpdate, onDelete }) => {
  return (
    <div
      className="bg-white border border-amber-200 
                 rounded-xl p-4 
                 hover:shadow-md transition"
    >
      {/* Info */}
      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
        <p className="font-medium text-amber-800">Title</p>
        <p>{reminder.title}</p>

        <p className="font-medium text-amber-800">Reminder Date</p>
        <p>{reminder.reminderDate}</p>

        <p className="font-medium text-amber-800">Notes</p>
        <p className="col-span-1">{reminder.notes}</p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => onUpdate(reminder)}
          className="px-3 py-1.5 text-sm font-medium 
                     text-amber-700 border border-amber-300 
                     rounded-lg hover:bg-amber-100 transition"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(reminder.id)}
          className="px-3 py-1.5 text-sm font-medium 
                     text-white bg-amber-600 
                     rounded-lg hover:bg-orange-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReminderCard;
