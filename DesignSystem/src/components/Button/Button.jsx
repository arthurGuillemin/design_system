import React, { useState } from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'default', // Variantes comme default, active, focus
  size = 'slim', // Tailles comme slim, large
  width = 'medium-width',
  disabled = false,
  icon = null,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        focused ? styles.focus : ''
      } ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
