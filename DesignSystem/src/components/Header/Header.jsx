import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ logo, title, icon, onIconClick }) => {
  return (
    <header className="header-container">
      {/* Left Section: Logo and Title */}
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">{title}</h1>
      </div>

      {/* Right Section: Icon */}
      <div className="header-right" onClick={onIconClick}>
        <img src={icon} alt="User Icon" className="header-icon" />
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
};

Header.defaultProps = {
  onIconClick: () => {},
};

export default Header;
