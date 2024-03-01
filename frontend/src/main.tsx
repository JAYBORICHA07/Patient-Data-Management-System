import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Homepage from "./pages/Homepage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Login from "./pages/Auth/Login.tsx";
import SignUp from "./pages/Auth/SignUp.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
import AboutUS from "./pages/AboutUS.tsx";
import DoctorProfile from "./pages/DoctorProfile.tsx";
import PatientProfile from "./pages/PatientProfile.tsx";
import Appointment from "./pages/Appointment.tsx";
import AppointmentList from "./pages/AppointmentList.tsx";
import AppointmentUpdate from "./pages/AppointmentUpdate.tsx";
import ChangePassword from "./pages/Auth/ChangePassword.tsx";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {

    path:'/contactus',
    element:<ContactUs/>
  },
  {
    path:'/about',
    element:<AboutUS/>
  },
  {
    path:'/doctorprofile',
    element:<DoctorProfile/>
  },
  {
    path:'/patientprofile',
    element:<PatientProfile/>
  },
  {
    path:'/appointment',
    element:<Appointment/>
  },
  {
    path:'/appointmentlist',
    element:<AppointmentList/>
  },
  {
    path:'/appointmentupdate',
    element:<AppointmentUpdate/>
  },
  {
    path:'/changepassword',
    element:<ChangePassword/>
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="mx-5 flex justify-between flex-col h-screen">
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
