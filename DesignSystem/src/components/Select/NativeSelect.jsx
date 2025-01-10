import React, { useState } from "react";
import "./NativeSelect.css";

const NativeSelect = ({ label, placeholder, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value); // Update the selected value
    onChange(value); // Pass the selected value to the parent component
  };

  return (
    <div className="native-select-container">
      {label && (
        <label htmlFor="native-select" className="native-select-label">
          {label}
        </label>
      )}
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
  );
};

export default NativeSelect;
