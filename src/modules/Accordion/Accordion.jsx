import { Component } from 'react';

import AccordionItem from './AccordionItem/AccordionItem';

class Accordion extends Component {
  state = {
    isOpen: false,
    openList: [],
  };

  toggleAnswers = newValue => {
    const { items } = this.props;
    const allId = items.map(el => el.id);
    this.setState({ openList: newValue ? allId : [] });
  };

  toggleAnswer = id => {
    this.setState(prevState => {
      const { openList } = prevState;
      const isPresent = openList.includes(id);
      if (isPresent) {
        return { openList: openList.filter(el => el !== id) };
      }
      return { openList: [...openList, id] };
    });
  };

  render() {
    const { items } = this.props;
    const { openList } = this.state;
    const itemList = items.map(({ id, ...rest }) => (
      <AccordionItem
        onClick={() => this.toggleAnswer(id)}
        isOpen={openList.includes(id)}
        key={id}
        {...rest}
      />
    ));
    const { toggleAnswers } = this;
    return (
      <div>
        <button onClick={() => toggleAnswers(true)} type="button">
          Expand All
        </button>
        <button onClick={() => toggleAnswers(false)} type="button">
          Collapse All
        </button>
        {itemList}
      </div>
    );
  }
}

export default Accordion;
