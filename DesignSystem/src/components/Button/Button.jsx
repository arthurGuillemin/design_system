import React, { useState } from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  width = 'medium-width', // Taille par défaut
  disabled = false,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[width]} ${
        disabled ? styles.disabled : ''
      } ${focused ? styles.focus : ''}`}
      onClick={onClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
