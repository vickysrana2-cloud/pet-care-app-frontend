// pet info as per petId and userId
// health info as per 
import API from "./api";


export const getPetDetailsByPetIdAndUserId = async (userId, petId) => {
    try{
        const response = await API.get(`/pets/${petId}/user/${userId}`);
        return response.data;
    }catch(error){
        console.error("Get pet details failed", error);
        throw error;
    }
};