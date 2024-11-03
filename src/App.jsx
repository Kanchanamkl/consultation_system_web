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
import Dashboard from "./pages/DashBoard/ClientDashBoard/ClientDashboard";
import Profile from "./pages/Profile/ClientProfile/Profie";
import Consultants from "./pages/Consultants/Consultant";
import Applications from "./pages/Applications/Applications";
import CounsellorProfile from "./pages/Profile/CounsellorProfile/CounsellorProfile";
import AddCounselor from "./pages/AddCounselor/AddCounselorPage";
import BookingPage from "./pages/Booking/BookingPage";
import JitsiMeeting from "./components/ChatRoom/JitsiMeeting";
import MeetingPage from "./pages/MeetingPage/MeetingPage";
import ClientAppointments from "./pages/Appointments/ClientAppointments/ClientAppointments";

function App() {
  const { isLoggedIn, role } = useContext(StoreContext);

  if (!isLoggedIn) {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/consultant-register" element={<ConsultantRegister />} />
        </Routes>
      </>
    );
  } else {
    switch (role) {
      case "ADMIN":
        return (
          <>
            <SideBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/consultants" element={<Consultants />} />
              <Route path="/profile" element={<CounsellorProfile />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/add-counselor" element={<AddCounselor />} />
            </Routes>
          </>
        );
      case "COUNSELOR":
        return (
          <>
            <SideBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/profile" element={<CounsellorProfile />} />
              <Route path="/meeting-page" element={<MeetingPage />} />
            </Routes>
          </>
        );
      case "CLIENT":
        return (
          <>
            <SideBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/appointments" element={<ClientAppointments/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/meeting-page" element={<MeetingPage />} />
              <Route path="/consultants" element={<Consultants />} />
            </Routes>
          </>
        );
      default:
        return (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/consultant-register"
                element={<ConsultantRegister />}
              />
            </Routes>
          </>
        );
    }
  }
}

export default App;
