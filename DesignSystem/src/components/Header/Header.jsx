import React from 'react';
import styles from './Header.module.css';
import IconButton from '../IconBtn/IconButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src='.//assets/icons/Logo.svg'></img>
        <h1 className={styles.title}>BLOOM</h1>
      </div>
      <div className={styles.accountContainer}>
        <IconButton type={"account"}/>
      </div>
    </header>
  );
};

export default Header;
