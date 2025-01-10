import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

import DefaultAccountIcon from '../../assets/icons/Account=Default.svg';
import PressedAccountIcon from '../../assets/icons/Account=Account.svg';
import DefaultPasswordIcon from '../../assets/icons/Password-Visibility=Default.svg';
import PressedPasswordIcon from '../../assets/icons/Password-Visibility=Clicked.svg';
import PressedArrowIcon from '../../assets/icons/arrow_forward_ios.svg';
import DefaultArrowIcon from '../../assets/icons/arrow_forward_ios2.svg';

const IconButton = ({ type, alt, onClick, isActive, size }) => {

  const [isPressed, setIsPressed] = useState(false);

  const iconSets = {
    account: { default: DefaultAccountIcon, pressed: PressedAccountIcon },
    arrow: { default: DefaultArrowIcon, pressed: PressedArrowIcon },
    password: { default: DefaultPasswordIcon, pressed: PressedPasswordIcon },
  };

  const icons = iconSets[type] || iconSets['account'];

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <button
      className={`${styles['icon-button']} ${styles[size]}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      <img
        src={isActive || isPressed ? icons.pressed : icons.default}
        alt={alt}
        className={styles['icon-image']}
      />
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['account', 'arrow', 'password']),
  alt: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
};

IconButton.defaultProps = {
  type: 'account',
  alt: 'Icon Button',
  onClick: () => {},
  isActive: false,
  size: 'large',
};

export default IconButton;
