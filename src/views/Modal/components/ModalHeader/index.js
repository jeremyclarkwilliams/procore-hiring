import React, { Component } from 'react';
import Button from '../../../../components/Button/index.js';
import iconPlus from '../../../../img/icon-plus.svg';

class ModalHeader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleModalClose(e);
    var form = document.getElementById('contact-form');
    this.props.resetForm(form);
  }

  render() {
    return (
      <header className="header">
        <h2 className="hdr">
          {this.props.title}
        </h2>
        <Button className="close-btn"
          type="button"
          iconCircle={true}
          image={iconPlus}
          imageAlt="close"
          handleClick={this.handleClick} />
      </header>
    );
  }
}

export default ModalHeader;
