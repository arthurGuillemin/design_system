import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'; // Import SVG as React Component
import { ReactComponent as AccountIcon } from '../../assets/icons/Account.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <h1 className={styles.title}>BLOOM</h1>
      </div>
      <div className={styles.accountContainer}>
        <AccountIcon className={styles.accountIcon} />
      </div>
    </header>
  );
};

export default Header;
