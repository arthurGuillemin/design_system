import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RoundedInput.module.css';
import IconButton from '../IconBtn/IconButton';

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
      {label && <label className={styles.inputLabel}>{label}</label>}
      {error && <p className={styles.errorMessage}>{errorMessage}</p>}
      <div className={styles.inputWrapper}>
        <div className={styles.inputField}>
          <input
            type={isPassword && !passwordVisible ? 'password' : type}
            className={`${styles.roundedInput} ${error ? styles.inputError : ''}`}
            placeholder={placeholder}
          />
        </div>
        {isPassword && (
          <div className={styles.iconWrapper}>
            <IconButton
              type="password"
              alt={passwordVisible ? 'Hide password' : 'Show password'}
              onClick={togglePasswordVisibility}
              isActive={passwordVisible}
            />
          </div>
        )}
      </div>
    </div>
  );
};

RoundedInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  isPassword: PropTypes.bool,
};

RoundedInput.defaultProps = {
  label: '',
  placeholder: 'Enter text...',
  type: 'text',
  error: false,
  errorMessage: '',
  isPassword: false,
};

export default RoundedInput;
