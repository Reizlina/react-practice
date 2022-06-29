import { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Tabs.module.css';

class Tabs extends Component {
  state = {
    index: 0,
  };

  swithTab(index) {
    this.setState({ index });
  }

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const titleList = items.map((item, ind) => (
      <li
        onClick={() => this.swithTab(ind)}
        key={item.id}
        className={ind === index ? styles.active : ''}
      >
        {item.title}
      </li>
    ));
    return (
      <div className={styles.tabs}>
        <ul className={styles.tabs__caption}>{titleList}</ul>
        <div className={`${styles.tabs__content} ${styles.active}`}>
          <p>{items[index].content}</p>
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
