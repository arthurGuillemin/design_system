import React, { useState } from "react";
import "./NativeSelect.css";
import ArrowDropdown from "../assets/ArrowDropdown=Default.svg"; // Import the icon

const NativeSelect = ({ label, placeholder, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value); // Update selected value
    onChange(value); // Pass the value to the parent
  };

  return (
    <div className="native-select-container">
      {label && (
        <label htmlFor="native-select" className="native-select-label">
          {label}
        </label>
      )}
      <div className="native-select-wrapper">
        {/* Dropdown Icon */}
        <img
          src={ArrowDropdown}
          alt="Dropdown Arrow"
          className="native-select-icon"
        />
        {/* Native Select */}
        <select
          id="native-select"
          className="native-select"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NativeSelect;
