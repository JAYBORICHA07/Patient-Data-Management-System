import axios from "axios";
import { getToken } from "./localStorageFunctions";

export const GetAllDoctors = async () => {
    try {
        const authToken = getToken();
        const config = {
            headers: { Authorization: `Bearer ${authToken}` }
        };
        const body = {

        }

        const response = await axios.post('http://localhost:8000/api/v1/doctor/getall', 
           body,
           config
        );
        
         return (response?.data)
        
    } catch (error) {
        console.log('Error:', error); // Handle errors here
    }
};