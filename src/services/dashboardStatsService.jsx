import API from "./api"

export const getDashboardStats = async (userId) =>{
    try{
        const response = await API.get("/dashboardstats/summary", {params: {userId}});
        return response.data;
    }catch(error){
        console.error("Get dashboard stats failed", error);
        throw error;
    }
}