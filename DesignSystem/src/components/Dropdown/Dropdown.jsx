import React, { useState } from "react";
import styles from "./Dropdown.module.css"; // Utilisation des modules CSS

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["dropdown-container"]}>
      <button className={styles["dropdown-button"]} onClick={toggleDropdown}>
        Test
      </button>

      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {[1, 2, 3, 4].map((item) => (
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
