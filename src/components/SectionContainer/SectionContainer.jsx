// src/components/SectionContainer.jsx

import React from 'react';
import './SectionContainerStyles.scss';

const SectionContainer = ({ title, children }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children} {/* This will allow you to pass content dynamically */}
      </div>
    </div>
  );
};

export default SectionContainer;
