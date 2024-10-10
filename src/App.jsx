import React, { useContext } from "react";
import HeroPage from "./pages/HeroPage/HeroPage";
import "./App.scss";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreContext } from "./StoreContext/StoreContext";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const { isLoggedIn } = useContext(StoreContext);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Routes>
            <>
              <Route path="/" element={<SideBar />} />
            </>
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
            </>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
