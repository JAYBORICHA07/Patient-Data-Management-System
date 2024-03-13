import axios from "axios";
import { checkUser, getToken } from "./localStorageFunctions";

const FetchData = async () => {
  const patientId = checkUser()?.user?.id;
    try {
      const authToken = getToken();
      const config = {
        headers: { Authorization: `Bearer ${authToken}` },
      };
      const bodyParameter = {
        patientId: patientId,
      };
  
      const response = await axios.post(
        "http://localhost:8000/api/v1/patient/profile/getone",
        bodyParameter,
        config
      );
      return response.data; // Handle response data here
    } catch (error) {
      console.log("Error:", error); // Handle errors here
    }
  };

  export default FetchData;