import React, { useState } from "react";
import styles from "./Dropdown.module.css"; 


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["dropdown-container"]}>
      <button className={styles["dropdown-button"]} onClick={toggleDropdown}>
        test
      </button>

      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {['mon panier', 'parametre', 'aides & contact'].map((item) => (
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
