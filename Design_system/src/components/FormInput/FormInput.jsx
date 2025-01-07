import React, { useState } from "react";
import "./FormInput.module.css";

const FormInput = ({ label, type, value, onChange, placeholder, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-input-container">
      {label && <label className="form-input-label">{label}</label>}
      <div className="form-input-wrapper">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="form-input"
        />
        {type === "password" && (
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁" : "👁️‍🗨️"}
          </span>
        )}
      </div>
      {error && <span className="form-input-error">{error}</span>}
    </div>
  );
};

export default FormInput;
