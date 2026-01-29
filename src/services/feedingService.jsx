import API from "./api";

// ADD FEEDING
export const addFeedingData = async (petId, feedingData) => {
  try {
    const response = await API.post(
      `/pets/${petId}/feeding`,
      feedingData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding feeding data:", error);
    throw error;
  }
};

// UPDATE FEEDING
export const updateFeedingData = async (petId, feedingId, feedingData) => {
  try {
    const response = await API.put(
      `/pets/${petId}/feeding/${feedingId}`,
      feedingData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating feeding data:", error);
    throw error;
  }
};

// DELETE FEEDING
export const deleteFeedingData = async (petId, feedingId) => {
  try {
    const response = await API.delete(
      `/pets/${petId}/feeding/${feedingId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting feeding data:", error);
    throw error;
  }
};
