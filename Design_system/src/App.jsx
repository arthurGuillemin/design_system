import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./features/Auth/LoginPage/LoginPage";
import ChangePasswordPage from "./features/Auth/ChangePasswordPage/ChangePasswordPage";
import ProfilePage from "./features/Profile/ProfilePage/ProfilePage";
import MainPage from "./features/Main/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page principale */}
        <Route path="/" element={<MainPage />} />

        {/* Route pour la page de connexion */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route pour la page de changement de mot de passe */}
        <Route path="/change-password" element={<ChangePasswordPage />} />

        {/* Route pour la page de profil */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
