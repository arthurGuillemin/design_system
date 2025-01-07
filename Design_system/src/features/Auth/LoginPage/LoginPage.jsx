import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validEmail = "test@example.com";
  const validPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      alert("Connexion réussie !");
      setError("");
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-page">
      <div className="login-image-container">
        <img
          src="https://source.unsplash.com/600x800/?flowers"
          alt="Background"
          className="login-image"
        />
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Connectez-vous</h1>
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <FormInput
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            error={error}
          />
          <a href="/forgot-password" className="forgot-password-link">
            Mot de passe oublié ?
          </a>
          <button type="submit" className="login-button">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
