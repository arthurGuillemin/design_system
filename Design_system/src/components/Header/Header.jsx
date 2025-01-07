import React from "react";
import "./Header.module.css";
import logo from "../../assets/images/react.svg"; // Remplacez par le chemin correct pour votre logo
import { FaUserCircle } from "react-icons/fa"; // Assurez-vous que react-icons est installé

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Bloom Logo" className="logo" />
          <span className="brand-name">BLOOM</span>
        </div>
        <div className="user-icon">
          <FaUserCircle size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
