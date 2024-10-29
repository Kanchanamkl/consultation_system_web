// src/components/RecentAppointments.jsx
import React from "react";
import appointments from "../../assets/fakedata/appointments"; // Adjust the path based on your structure
import "./AppointmentCardStyles.scss";


  const AppointmentCard = ({ appointment }) => {
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
            <p
              className={`appointment-status ${
                appointment.status === "Upcoming"
                  ? "status-upcoming"
                  : appointment.status === "Completed"
                  ? "status-completed"
                  : appointment.status === "Today"
                  ? "status-today"
                  : ""
              }`}
            >
              {appointment.status}
            </p>
            {appointment.status === "Today" && (
              <button className="join-button">Join Now</button>
            )}
            </div>

            
          </div>
        </div>
    </div>
  );
};

export default AppointmentCard;
