import styles from './Header.module.css';
import IconButton from '../IconBtn/IconButton';
import Logo from '../../assets/img/logo.svg';
import Dropdown from '../Dropdown/Dropdown';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo}></img>
        <h1 className={styles.title}>BLOOM</h1>
      </div>
      <div className={styles.accountContainer}>
        <IconButton type={"account"} className={styles.account} /**link={"/profil"}*//>
        <Dropdown className={styles.Dropdown}/>
      </div>
    </header>
  );
};

export default Header;