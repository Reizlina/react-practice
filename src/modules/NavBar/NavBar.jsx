import styles from './nav-bar.module.css';

import NavBarMenu from './NavBarMenu/NavBarMenu';
import Button from '../../shared/components/Button/Button';
import Logo from '../../shared/components/Logo/Logo';

import menu from '../../db/menu.json';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.row}`}>
        <NavBarMenu items={menu} />
        <Logo />
        <Button text="Buy Now" />
      </div>
    </nav>
  );
};

export default NavBar;
