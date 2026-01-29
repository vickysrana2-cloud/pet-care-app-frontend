import API from "./api";

// for admin use only
export const getAllPets = async ()=>{
    try{
        const response =await API.get("/pets");
        return response.data;
    }catch(error){
        console.error("Get all pets failed", error);
        throw error;
    }
};



export const addPet = async (petData, userId) => {
  try {
    const response = await API.post(`/pets/add/${userId}`, petData);
    return response.data;
  } catch (error) {
    console.error("Add pet failed", error);
    throw error;
  }
};


export const getSinglePetByUserId =async(userId, petId) => {
     try{
         const response =await API.get( `/pets/${petId}/user/${userId}`);
         return response.data;
     }catch(error){
        console.error("Get single pet failed", error);
        throw error;
     }
}; 

// get all pets for a specific user
export const getAllPetsByUserId = async(userId) => {
    try{
        const response = await API.get(`/pets/user/${userId}`);
        return response.data;
    }catch(error){
        console.error("Get all pets failed",error);
        throw error;
    }
};


// export const getAllRemaindersOfAllPetsByUserId = async(userId) => {
//     try{
//         const response = await API.get()
//     }
// }


export const updateByPetIdAndUserId = async(petId, userId, updatedPetData) => {
    try{
        const response = await API.put(`/pets/${petId}/user/${userId}`, updatedPetData);
        return response.data;
    }catch( error){
        console.error("Update pet failed", error);
        throw error;
    }
};

export const deleteByPetIdAndUserId = async(petId, userId) => {
    try{
        const response = await API.delete(`/pets/${petId}/user/${userId}`);
        return response.data;
    }catch(error){
        console.error("Delete pet failed", error);
        throw error;
    }
};