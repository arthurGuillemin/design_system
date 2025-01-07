import React, { useState } from 'react';
import styles from './EmailInput.module.css';

const EmailInput = ({ label }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError('Votre Email est invalide');
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  return (
    <div className={styles.emailInputContainer}>
      <label className={styles.emailLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          className={`${styles.emailInput} ${error ? styles.inputError : ''}`}
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <span className={styles.inputIcon}>📧</span>
      </div>
      {error && <p className={styles.errorText}>❗ {error}</p>}
    </div>
  );
};

export default EmailInput;
