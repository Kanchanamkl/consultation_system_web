import React from "react";
import "./ConsultantCardStyles.scss"; // Add styles for the DoctorCard component

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
    </div>
  );
};

export default ConsultantCard;
