import React, { Component } from 'react';
import ModalForm from './components/ModalForm/index.js';

class Modal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.active ? 'active' : ''}`}>
        <section className="dialog">
          <ModalForm onContactSubmit={this.props.onContactSubmit} handleModalClose={this.props.handleModalClose} active={this.props.active} />
        </section>
      </div>
    );
  }
}

export default Modal;
