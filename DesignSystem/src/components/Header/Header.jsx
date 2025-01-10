import React from 'react';
import styles from './Header.module.css';
import IconButton from '../IconBtn/IconButton';
import Logo from '../../assets/icons/Logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo}></img>
        <h1 className={styles.title}>BLOOM</h1>
      </div>
      <div className={styles.accountContainer}>
        <IconButton type={"account"}/>
      </div>
    </header>
  );
};

export default Header;