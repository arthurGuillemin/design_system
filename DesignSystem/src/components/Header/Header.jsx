import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg'; // Replace with the path to your logo image
import profileIcon from '../../assets/images/profile-icon.svg'; // Replace with the path to your profile icon

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Bloom Logo" className={styles.logo} />
        <span className={styles.title}>BLOOM</span>
      </div>
      <div className={styles.profileIconContainer}>
        <img src={profileIcon} alt="Profile Icon" className={styles.profileIcon} />
      </div>
    </header>
  );
};

export default Header;
