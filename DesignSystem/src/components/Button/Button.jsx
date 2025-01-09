import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  size = 'slim',
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
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[width]} ${
        focused ? styles.focus : ''
      } ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
    >
      <span className={styles.label}>{children}</span> {/* Texte en premier */}
      {icon && <span className={styles['button-icon']}>{icon}</span>} {/* Icône à droite */}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['default', 'active', 'focus']),
  size: PropTypes.oneOf(['slim', 'large']),
  width: PropTypes.oneOf(['full-width', 'medium-width', 'small-width']),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  variant: 'default',
  size: 'slim',
  width: 'medium-width',
  disabled: false,
  icon: null,
};

export default Button;
