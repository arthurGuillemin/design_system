import { useState } from "react";
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

      {/* La liste reste dans le DOM et utilise des classes CSS conditionnelles */}
      <ul
        className={`${styles["dropdown-list"]} ${
          isOpen ? styles["dropdown-open"] : styles["dropdown-closed"]
        }`}
      >
        {["Mon panier", "Paramètre", "Aides & contact"].map((item) => (
          <li
            key={item}
            className={styles["dropdown-list-item"]}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
