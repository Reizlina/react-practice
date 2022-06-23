import PropTypes from 'prop-types';
import styles from './nav-bar-menu.module.css';

const NavBarMenu = ({ items }) => {
  const listItems = items.map(({ id, text, link }) => (
    <li key={id} className={styles.item}>
      <a className={styles.link} href={link}>
        {text}
      </a>
    </li>
  ));
  return <ul className={styles.list}>{listItems}</ul>;
};

export default NavBarMenu;

NavBarMenu.defaultProps = { items: [] };

NavBarMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
