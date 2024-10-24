// src/components/RecentAppointments.jsx
import React from "react";
import appointments from "../../assets/fakedata/appointments"; // Adjust the path based on your structure
import "./RecentAppointmentsStyles.scss";

const RecentAppointments = () => {
  return (
    <div className="appointments-container">
      {appointments.map((appointment) => (
        <div className="appointment-card" key={appointment.id}>
          <div className="profile-img">
          <img
            src={appointment.consultantImg}
            alt={appointment.consultantName}
            className="consultant-img"
          />
          </div>
          <div className="details">
          <h4 className="consultant-name">{appointment.consultantName}</h4>
          <p className="appointment-date">{appointment.date}</p>
          <p className="appointment-time">{appointment.time}</p>
          <p
              className={`appointment-status ${
                appointment.status === "Upcoming"
                  ? "status-upcoming"
                  : "status-completed"
              }`}
            >
               {appointment.status}
            </p>
         
          </div>

        </div>
      ))}
    </div>
  );
};

export default RecentAppointments;
