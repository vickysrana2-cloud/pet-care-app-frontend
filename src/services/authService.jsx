import API from "./api";


export const signupUser = async (userData) => {
    const response = await API.post("/auth/signup", userData);
    return response.data;
}

export const loginUser = async (credentials) => {
    const response = await API.post("/auth/login", credentials);
    // console.log("Login response:", response);
    return response.data;
}