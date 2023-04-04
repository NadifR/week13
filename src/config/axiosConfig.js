import { API_URL } from "../constans/path";
import axios from axios;


const instance = axios.create({ baseUrl: API_URL});

instance.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export {instance};