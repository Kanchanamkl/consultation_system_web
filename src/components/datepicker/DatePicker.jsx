import React, { useState } from 'react';
import './DatePicker.css'



const DatePicker = ({ selectedDate, setSelectedDate }) => {


  const handleDateChange = (e) => {
    const selected = new Date(e.target.value);
    setSelectedDate(selected);
    if (selectedDate) {
      onDateChange(selected); 
    }
  };

  return (
    <div className="">
      <label htmlFor="datePicker">Select a Date : </label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate.toISOString().substr(0, 10)} 
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;