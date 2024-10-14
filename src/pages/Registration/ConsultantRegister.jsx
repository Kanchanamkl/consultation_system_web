import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ConsultantRegisterStyles.scss";

const ConsultantRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [contact, setContact] = useState("");
  const [role] = useState("CONSULTANT"); // Predefined role as CONSULTANT
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const consultantData = {
      firstName,
      lastName,
      username,
      password,
      specialization,
      contact,
      role,
    };

    // Post the data to your API
    axios
      .post("http://localhost:8080/api/users/create-user", consultantData)
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("Email already registered! Please login.");
          navigate("/login");
        } else {
          alert(
            "Registered successfully! You'll receive confirmation after admin approval."
          );
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Consultant Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              id="firstName"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              id="lastName"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              id="username"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <input
              type="text"
              placeholder="Enter Specialization"
              id="specialization"
              onChange={(event) => setSpecialization(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <textarea
              placeholder="Enter Contact Number"
              id="contact"
              onChange={(event) => setContact(event.target.value)}
              required
            />
          </div>

          <div className="info-text">
            After submitting this form, you'll receive a confirmation email once
            your profile is reviewed and approved by the admin and will arrange
            interview sesions with you.
          </div>

          <button type="submit" className="btn-primary">
            Submit Application
          </button>
        </form>

        <div className="login-container">
          <Link to="/login" className="btn-secondary">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultantRegister;
