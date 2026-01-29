import API from './api';

export const addHealthData = async (petId, healthData) => {
    try{
         const response = await API.post(`/pets/${petId}/health`, healthData);
            return response.data;
    }
    catch (error) {
        console.error("Error adding health data:", error);
        throw error;
    }
}  


export const updateHealthData = async (petId, healthId, healthData) => {
    try{
         const response = await API.put(`/pets/${petId}/health/${healthId}`, healthData);
            return response.data;
    }
    catch (error) {
        console.error("Error updating health data:", error);
        throw error;
    }
}  


export const deleteHealthData = async (petId, healthId) => {
    try{
         const response = await API.delete(`/pets/${petId}/health/${healthId}`);
            return response.data;
    }
    catch (error) {
        console.error("Error deleting health data:", error);
        throw error;
    }
}


//GET health records by pet id

export const getHealthByPetId = async (petId) => {
    try{
        const response = await API.get(`/pets/${petId}/health`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching health data:", error);
        throw error;
    }
}