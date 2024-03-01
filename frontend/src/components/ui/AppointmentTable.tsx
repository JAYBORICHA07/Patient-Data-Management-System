import { useEffect } from "react";
import axios from "axios";
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
            const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpc2hha2VyYWxpeWEwOEBnbWFpbC5jb20iLCJpZCI6MTAsImlhdCI6MTcwOTI4NjExNSwiZXhwIjoxNzA5NDU4OTE1fQ.whI97_pbxlkiMaUMjkXi-KZJuTxfZre7AOkl-gfO-2E";

            const response = await axios.post('http://localhost:8000/api/v1/dashboard/doctor', {
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
                body: { doctorId : "5" } 
            });
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
