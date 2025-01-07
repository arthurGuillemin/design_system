import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <h1 className="main-title">Bienvenue sur la page principale</h1>
      <nav className="main-navigation">
        <ul>
          <li>
            <Link to="/login" className="main-link">Connexion</Link>
          </li>
          <li>
            <Link to="/profile" className="main-link">Mon Profil</Link>
          </li>
          <li>
            <Link to="/change-password" className="main-link">Changer le mot de passe</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainPage;
