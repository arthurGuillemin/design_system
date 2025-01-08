import { useState } from 'react';
import PropTypes from 'prop-types';
import './IconButton.module.css';

import DefaultAccountIcon from '../../assets/icons/Account=Default.svg';
import PressedAccountIcon from '../../assets/icons/Account=Account.svg';
import DefaultArrowIcon from '../../assets/icons/arrow_forward_ios.svg';
import PressedArrowIcon from '../../assets/icons/arrow_forward_ios2.svg';
import DefaultPasswordIcon from '../../assets/icons/Password-Visibility=Default.svg';
import PressedPasswordIcon from '../../assets/icons/Password-Visibility=Clicked.svg';

const IconButton = ({ type, alt, onClick, isActive }) => {
  const iconSets = {
    account: { default: DefaultAccountIcon, pressed: PressedAccountIcon },
    arrow: { default: PressedArrowIcon, pressed: DefaultArrowIcon },
    password: { default: DefaultPasswordIcon, pressed: PressedPasswordIcon },
  };
  const icons = iconSets[type] || iconSets['account'];

  return (
    <button className="icon-button" onClick={onClick}>
      <img
        src={isActive ? icons.pressed : icons.default} 
        alt={alt}
        className="icon-image"
      />
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['account', 'arrow', 'password']),
  alt: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'account',
  alt: 'Icon Button',
  onClick: () => {},
  isActive: false,
};

export default IconButton;
