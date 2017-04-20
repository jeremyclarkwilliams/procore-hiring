import React, { Component } from 'react';
import Button from '../../../../components/Button/index.js';

class ModalFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <Button className="contact-submit-btn"
          type="submit"
          text="Save"
          disabled={this.props.disabled} />
      </footer>
    );
  }
}

export default ModalFooter;
