import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.props.closeModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
