import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ text, outline, type }) => {
  const classBtn = outline ? styles.lightBtn : styles.darkBtn;
  return (
    <button type={type} className={classBtn}>
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = { outline: false, type: 'button' };

Button.propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
