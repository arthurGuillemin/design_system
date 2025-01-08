import React, { useState } from 'react';
import styles from './RoundedInput.module.css';

const RoundedInput = ({
  label,
  placeholder,
  type = 'text',
  error = false,
  errorMessage = '',
  isPassword = false,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{label}</label>
      {error && <p className={styles.errorMessage}>{errorMessage}</p>}
      <div className={styles.inputWrapper}>
        <input
          type={isPassword && !passwordVisible ? 'password' : type}
          className={`${styles.roundedInput} ${error ? styles.inputError : ''}`}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.visibilityToggle}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? '👁️‍🗨️' : '🙈'}
          </button>
        )}
      </div>
    </div>
  );
};

export default RoundedInput;
