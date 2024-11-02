// src/components/RecentAppointments.jsx
import React, { useState, useEffect } from "react";
import appointments from "../../assets/fakedata/appointments"; // Adjust the path based on your structure
import "./AppointmentCardStyles.scss";
import { useNavigate } from "react-router-dom";
const AppointmentCard = ({ appointment }) => {
  const navigate = useNavigate();
  const calculateTimeLeft = () => {
    const startTime = "2024-11-01T13:48:59"; // Hardcoded start time
    const difference = +new Date(startTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        "H:": Math.floor((difference / (1000 * 60 * 60)) % 24),
        "M:": Math.floor((difference / 1000 / 60) % 60),
        "S:": Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
      if (Object.keys(timeLeft).length === 0) {
        setIsTimeUp(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;

    timerComponents.push(
      <div key={interval} className="timer-component">
        <span>{interval}</span> {timeLeft[interval]}{" "}
      </div>
    );
  });

  const handleNavidate = () => {
    navigate("/meeting-page");
  };

  return (
    <div className="appointments-container">
      <div className="appointment-card" key={appointment.id}>
        <div className="profile-img">
          <img
            src={appointment.consultantImg}
            alt={appointment.consultantName}
          />
        </div>
        <div className="details">
          <h4 className="consultant-name">{appointment.consultantName}</h4>
          <p className="appointment-date">Date : {appointment.date}</p>
          <p className="appointment-time">Time : {appointment.time}</p>
          <div className="join-section">
            {appointment.status !== "Today" && (
              <p
                className={`appointment-status ${
                  appointment.status === "Upcoming"
                    ? "status-upcoming"
                    : appointment.status === "Completed"
                    ? "status-completed"
                    : ""
                }`}
              >
                {appointment.status}
              </p>
            )}
            {appointment.status === "Today" && (
              <>
                <div className="countdown-timer">
                  {timerComponents.length ? (
                    timerComponents
                  ) : (
                    <span>You Can Join Now!</span>
                  )}
                </div>
                <div>
                  <button
                    disabled={!isTimeUp}
                    className={`join-button ${!isTimeUp ? "disabled" : ""}`}
                    onClick={() => handleNavidate()}
                  >
                    Join Now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
