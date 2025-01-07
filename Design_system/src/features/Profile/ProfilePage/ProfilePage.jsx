import React from "react";
import "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h1 className="profile-title">Mon Profil</h1>
      <div className="profile-info">
        <p><strong>Nom :</strong> John Doe</p>
        <p><strong>Email :</strong> test@example.com</p>
      </div>
      <button className="edit-profile-button">Modifier le profil</button>
    </div>
  );
};

export default ProfilePage;
