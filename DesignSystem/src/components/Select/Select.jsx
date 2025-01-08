import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const CustomSelect = ({ label, options, placeholder, onChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the dropdown
  const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option
  const dropdownRef = useRef(null); // Reference for the dropdown container

  // Function to handle option click
  const handleOptionClick = (option) => {
    setSelectedOption(option.label); // Update the selected option
    onChange(option.value); // Pass the value to the parent component
    setIsOpen(false); // Close the dropdown
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`select-container ${disabled ? 'disabled' : ''}`}>
      {label && <label className="select-label">{label}</label>}

      {/* Select Box */}
      <div
        className={`select-box ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
        tabIndex={0}
      >
        <span className={`select-placeholder ${selectedOption ? 'selected' : ''}`}>
          {selectedOption || placeholder}
        </span>
        <div className="select-arrow"></div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="select-options">
          {options.map((option, index) => (
            <li
              key={index}
              className={`select-option ${
                selectedOption === option.label ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {selectedOption === option.label && (
                <span className="checkmark">✔</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CustomSelect.defaultProps = {
  label: '',
  placeholder: 'Select an option',
  disabled: false,
};

export default CustomSelect;
