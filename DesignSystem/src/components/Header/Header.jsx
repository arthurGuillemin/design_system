import styles from './Header.module.css';
import IconButton from '../IconBtn/IconButton';
import Logo from '../../assets/img/logo.svg';
import Dropdown from '../Dropdown/Dropdown';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/"><img src={Logo} href={"/"}></img></Link>
        <h1 className={styles.title}>BLOOM</h1>
      </div>
      <div className={styles.accountContainer}>
        <Link to="/login"><IconButton type={"account"} className={styles.account}/></Link>
        <Dropdown className={styles.Dropdown}/>
      </div>
    </header>
  );
};

export default Header;