import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import {
  FaAddressBook,
  FaShoppingCart,
  FaCartArrowDown,
  FaUser,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoFastFood, IoLogOut } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { StoreContext } from "../../StoreContext/StoreContext";
import { MdTableRestaurant } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./SideBar.scss";

const SideBar = () => {
  const { isLoggedIn, handleLogout, firstName, role, username } =
    useContext(StoreContext);


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [showProfileCard, setShowProfileCard] = useState(false);

  const toggleProfileCard = () => {
    setShowProfileCard((prevState) => !prevState);
  };


  const confirmLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });

    if (result.isConfirmed) {
      handleLogout();
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="dash-board-navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <div className="nav-bar-right">
            <li className="nav-text">
              <Link to="/my-orders">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="nav-text">
              <Link onClick={toggleProfileCard}>
                <FaUser className="profile-icon" />
              </Link>
            </li>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/">
                <FaHome />
                <span> Home </span>
              </Link>
            </li>

            {isLoggedIn && (
              <>

                <li className="nav-text">
                  <Link to="/users">
                    <FaUsers />
                    <span> Profile </span>
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn ? (
              <button onClick={confirmLogout} className="login-out-btn">
                Logout
              </button>
            ) : (
              <li className="nav-text">
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
