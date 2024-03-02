import { useEffect } from "react";
import axios from "axios";
import { getToken } from "@/utils/localStorageFunctions";
// type Appointment = {
//   id: number;
//   date: string;
//   patientName: string;
//   doctorName: string;
//   bookingDate: Date;
//   appointmentDate: Date;
//   appointmentTime: string;
//   status: "pending" | "inprogress" | "cancle" | "compeleted";
// };

const AppointmentTable = () => {
//   const [appointmentData, setAppointmentData] = useState<Appointment[]>();

useEffect(() => {
    const fetchData = async () => {
        try {
            const authToken = getToken();
            const config = {
                headers: { Authorization: `Bearer ${authToken}` }
            };
            const bodyParameter = {
                doctorId : "5"
            }

            const response = await axios.post('http://localhost:8000/api/v1/dashboard/doctor', 
               bodyParameter,
               config
            );
            console.log(response.data); // Handle response data here
        } catch (error) {
            console.error('Error:', error); // Handle errors here
        }
    };
    fetchData();
}, []);



  return <div>AppointmentTable</div>;
};

export default AppointmentTable;
