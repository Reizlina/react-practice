import { Component } from 'react';

// import styles from './AccordeonItem.module.css';

class AccordeonItem extends Component {
  // state = {
  //   isOpen: false,
  // };

  // onHandleClick = () => {
  //   this.setState(prevState => {
  //     return {
  //       isOpen: !prevState.isOpen,
  //     };
  //   });
  // };

  render() {
    const { question, answer, isOpen, onClick } = this.props;
    // const { isOpen } = this.state;
    return (
      <div className="accordion-item">
        <p onClick={onClick} className="title">
          {question}
        </p>

        {isOpen && (
          <div className="content">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  }
}

export default AccordeonItem;
