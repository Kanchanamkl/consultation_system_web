import React, { useState, useEffect } from "react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import "./DashboardStyles.scss";
import consult_list from "/src/assets/fakedata/consult_list.js";
import ConsultantCard from "../../components/ConsultantCard/ConsultantCard";
import Specialties from "../../components/Specialties/Specialties";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import RecentAppointments from "../../components/RecentAppointments/RecentAppointments";

const Dashboard = () => {
  const [featuredConsultant, setFeaturedConsultant] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const consultsPerPage = 4;

  useEffect(() => {
    // const topConsultants = consult_list.slice(0, 4);
    const topConsultants = consult_list;
    setFeaturedConsultant(topConsultants);
  }, []);

  const nextConsults = () => {
    if (currentIndex + consultsPerPage < featuredConsultant.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousConsults = () => {
    if (currentIndex != 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentConsults = featuredConsultant.slice(
    currentIndex,
    currentIndex + consultsPerPage
  );
  return (
    <div className="dashboard-container">
      <div className="featured-consultants">
        <SectionContainer title="Featured Consultants">
          <div className="consult-list">
            {/* Previous Button */}
            <div
              onClick={previousConsults}
              className={`pagination-icon left-icon ${
                currentIndex === 0 ? "disabled" : ""
              }`}
            >
              <GrFormPrevious size={30}  />
            </div>
            {currentConsults.map((consult) => (
              <ConsultantCard key={consult.doc_id} consultant={consult} />
            ))}
            {/* Next Arrow Icon */}
            <div
              onClick={nextConsults}
              className={`pagination-icon right-icon ${
                currentIndex + consultsPerPage >= featuredConsultant.length
                  ? "disabled"
                  : ""
              }`}
            >
              <GrFormNext size={30} />
            </div>
          </div>
        </SectionContainer>
      </div>

      <div className="spcialities-consultants">
        <SectionContainer title="Our Spcialities">
        <Specialties />
        </SectionContainer>
      </div>

      <div className="recent-apointments-consultants">
        <SectionContainer title="Recent Appointments">
          <RecentAppointments/>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Dashboard;
