import React from "react";
import "./NativeSelect.css";

const NativeSelect = ({ label, placeholder, options, value, onChange }) => {
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
        value={value}
        onChange={onChange}
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
