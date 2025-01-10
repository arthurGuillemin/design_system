import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import IconButton from "../IconBtn/IconButton";
import Dropdown from "../Dropdown/Dropdown";
import logo from "../../assets/img/logo.svg";

const Header = ({ title, onAccountClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.accountContainer}>
        <IconButton
          type="account"
          alt="User Account"
          size="small"
          onClick={toggleDropdown}
        />
        <Dropdown
          className={`${styles.dropdown} ${isDropdownOpen ? "show" : ""}`}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  onAccountClick: PropTypes.func,
};

Header.defaultProps = {
  logo: "",
  title: "BLOOM",
  onAccountClick: () => {},
};

export default Header;
