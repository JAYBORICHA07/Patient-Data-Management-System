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


const router = createBrowserRouter([
  {
    path : '/',
    element : <Homepage/>,
    errorElement : <ErrorPage />
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/register',
    element:<SignUp/>
  },
  {
    path:'/contactus',
    element:<ContactUs/>
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="mx-5">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
