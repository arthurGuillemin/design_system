import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import DefaultAvatar from '../../assets/icons/Account=Default.svg'; // Import de l'image par défaut

const Avatar = ({ src, alt, size = 'medium', fallback }) => {
  const avatarSrc = src || DefaultAvatar; // Utilise l'image par défaut si `src` est vide
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <img src={avatarSrc} alt={alt} className={styles.image} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string, // URL de l'image
  alt: PropTypes.string, // Texte alternatif pour l'image
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Taille de l'avatar
  fallback: PropTypes.string, // Optionnel : Texte si image par défaut (non nécessaire ici)
};

Avatar.defaultProps = {
  src: null,
  alt: 'User Avatar',
  size: 'medium',
  fallback: '',
};

export default Avatar;
