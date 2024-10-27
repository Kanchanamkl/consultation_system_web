import React, { useContext } from "react";
import HeroPage from "./pages/HeroPage/HeroPage";
import "./App.scss";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreContext } from "./StoreContext/StoreContext";
import SideBar from "./components/SideBar/SideBar";
import ConsultantRegister from "./pages/Registration/ConsultantRegister";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointments/Appointments";
import Profile from "./pages/Profile/ClientProfile/Profie";
import Consultants from "./pages/Consultants/Consultant";
import Applications from "./pages/Applications/Applications";
import CounsellorProfile from "./pages/Profile/CounsellorProfile/CounsellorProfile";
import AddCounselor from "./pages/AddCounselor/AddCounselorPage";
import BookingPage from "./pages/Booking/BookingPage";

function App() {
  const { isLoggedIn } = useContext(StoreContext);

  return (
    <>
      {isLoggedIn ? (
        <>
        <SideBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/profile" element={<CounsellorProfile />} />
            <Route path="/applciations" element={<Applications />} />
            <Route path="/book" element={<BookingPage/>} />
            <Route path="/add-counselor" element={<AddCounselor/>} />
          </Routes>
        </>
      ) : (
        <>
          <NavBar />
          <Routes>
            <>
              <Route path="/" element={<HeroPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/consultant-register" element={<ConsultantRegister />}
              />
            </>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
