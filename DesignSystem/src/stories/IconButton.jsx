import { useState } from 'react';
import PropTypes from 'prop-types';
import './IconButton.module.css';

const IconButton = ({ defaultIcon, pressedIcon, alt, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <button
      className="icon-button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      <img
        src={isPressed ? pressedIcon : defaultIcon}
        alt={alt}
        className="icon-image"
      />
    </button>
  );
};

IconButton.propTypes = {
  defaultIcon: PropTypes.string.isRequired,
  pressedIcon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  alt: 'Icon Button',
  onClick: () => {},
};

export default IconButton;
