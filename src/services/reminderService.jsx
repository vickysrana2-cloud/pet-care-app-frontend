import API from "./api";

// ADD REMINDER
export const addReminderData = async (petId, reminderData) => {
  try {
    const response = await API.post(
      `/pets/${petId}/reminders`,
      reminderData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding reminder:", error);
    throw error;
  }
};

// UPDATE REMINDER
export const updateReminderData = async (
  petId,
  reminderId,
  reminderData
) => {
  try {
    const response = await API.put(
      `/pets/${petId}/reminders/${reminderId}`,
      reminderData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating reminder:", error);
    throw error;
  }
};

// DELETE REMINDER
export const deleteReminderData = async (petId, reminderId) => {
  try {
    const response = await API.delete(
      `/pets/${petId}/reminders/${reminderId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting reminder:", error);
    throw error;
  }
};

// GET REMINDERS BY PET ID
export const getRemindersByPetId = async (petId) => {
  try {
    const response = await API.get(`/pets/${petId}/reminders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reminders:", error);
    throw error;
  }
};