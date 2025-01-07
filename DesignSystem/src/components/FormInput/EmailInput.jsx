import React, { useState } from 'react';
import styles from './EmailInput.module.css';

const EmailInput = ({ label = "Email", error = "", value = "", onChange }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          className={`${styles.input} ${error ? styles.error : ""} ${focused ? styles.focused : ""}`}
          placeholder={label}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default EmailInput;
