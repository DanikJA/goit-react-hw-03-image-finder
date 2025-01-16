import React, { Component } from 'react';
import './Modal.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose(); // Закриваємо модалку при натисканні Escape
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose(); // Закриваємо модалку при кліку на фон
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
