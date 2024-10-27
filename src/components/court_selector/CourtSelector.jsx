import React from 'react';
import './CourtSelector.css';

const CourtSelector = ({ selectedCourt, setSelectedCourt }) => {
  return (
    <div >
    <label htmlFor="datePicker">Select a Court : </label>
    <select  value={selectedCourt} onChange={(e) => setSelectedCourt(e.target.value)} className="court-selector">
      <option value="Court 1">Court 1</option> {/* Court 1 is default */}
      <option value="Court 2">Court 2</option>
      <option value="Court 3">Court 3</option>
    </select>
    </div>
  );
};

export default CourtSelector;
