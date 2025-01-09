import React, { useState } from "react";
import styles from "./Dropdown.module.css"; 
import IconButton from "../IconBtn/IconButton";  



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["dropdown-container"]}>
      <button className={styles["dropdown-button"]} onClick={toggleDropdown}>
      <IconButton 
        type="arrow" 
        alt="Dropdown Arrow" 
        onClick={toggleDropdown} 
        isActive={isOpen} 
      />
      </button>

      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {['Mon panier', 'Paramètre', 'Aides & contact'].map((item) => (
            <li
              key={item}
              className={styles["dropdown-list-item"]}
              onClick={() => setIsOpen(false)}
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
