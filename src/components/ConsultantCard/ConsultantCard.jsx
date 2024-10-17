import React from "react";
import "./ConsultantCardStyles.scss"; // Add styles for the ConsultantCard component
import { MdAssignmentAdd } from "react-icons/md";

const ConsultantCard = ({ consultant }) => {
  return (
    <div className="consultn-card">
      <img
        src={consultant.doc_img}
        alt={consultant.name}
        className="consultn-img"
      />
      <h3 className="consultn-name">{consultant.name}</h3>
      <p className="consultn-specialize">{consultant.specialize}</p>
      <button className="appointment-button">
      <MdAssignmentAdd className="appointment-icon" /> {/* Add the icon here */}
        Make an Appointment</button>
    </div>
  );
};

export default ConsultantCard;
