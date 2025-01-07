import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./ChangePasswordPage.module.css";

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
    } else {
      setError("");
      alert("Mot de passe changé avec succès !");
    }
  };

  return (
    <div className="change-password-page">
      <form className="change-password-form" onSubmit={handleSubmit}>
        <h1 className="change-password-title">Changez votre mot de passe</h1>
        <FormInput
          label="Mot de passe actuel"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        <FormInput
          label="Nouveau mot de passe"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        <FormInput
          label="Confirmation nouveau mot de passe"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Mot de passe"
          error={error}
        />
        <button type="submit" className="change-password-button">
          Valider
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
