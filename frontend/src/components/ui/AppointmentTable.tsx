/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "@/utils/localStorageFunctions";
import { checkUser } from "@/utils/localStorageFunctions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Appointment from "@/pages/Appointment";

type Appointment = {
  id: number;
  date: string;
  patientName: string;
  doctorName: string;
  bookingDate: Date;
  appointmentDate: Date;
  appointmentTime: string;
  status: "PENDING" | "INPROGRESS" | "CANCLE" | "COMPLETED";
};

const AppointmentTable = () => {
  const [appointmentData, setAppointmentData] = useState<Appointment[]>();

  useEffect(() => {
    const userId = checkUser()?.user?.id;
    const fetchData = async () => {
      try {
        const authToken = getToken();
        const config = {
          headers: { Authorization: `Bearer ${authToken}` },
        };
        const bodyParameter = {};

        const response = await axios.post(
          "http://localhost:8000/api/v1/appointment/get",
          bodyParameter,
          config
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setAppointmentData(
          response.data.filter(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
            (appointment) =>
              appointment.patientId == userId || appointment.doctorId == userId
          )
        );

        // Handle response data here
      } catch (error) {
        console.log("Error:", error); // Handle errors here
      }
    };
    fetchData();
  }, []);

  return (
    <div>
          <Table>
            <TableCaption>A list of your recent Appointments.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Doctor Name</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Booking Date</TableHead>
                <TableHead>Appointment Date</TableHead>
                <TableHead>Appointment Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <>
                {
                    appointmentData?.map((appointment : Appointment) => (
                       <TableRow>
                            <TableCell>{appointment.status}</TableCell>
                            <TableCell>{appointment.doctorName}</TableCell>
                            <TableCell>{appointment.patientName}</TableCell>
                            <TableCell>{appointment.appointmentDate.toString()}</TableCell>
                            <TableCell>{appointment.appointmentDate.toString()}</TableCell>
                            <TableCell>{appointment.appointmentTime}</TableCell>
                       </TableRow>     
                    ))
                }
              </>
            </TableBody>
          </Table>
    </div>
  );
};

export default AppointmentTable;
