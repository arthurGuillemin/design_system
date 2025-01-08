import React, { useState } from "react";
import "./Dropdown.module.css";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Test
        </button>
  
        {isOpen && (
          <ul className="dropdown-list">
            {[1, 2, 3, 4].map((item) => (
              <li
                key={item}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Dropdown;