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
import Clients from "./pages/Clients/Clients";
import Profile from "./pages/Profile/Profie";
import Consultants from "./pages/Consultants/Consultant";
import Applications from "./pages/Applications/Applications";

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
            <Route path="/clients" element={<Clients />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/applciations" element={<Applications />} />
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
              <Route
                path="/consultant-register"
                element={<ConsultantRegister />}
              />
            </>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
