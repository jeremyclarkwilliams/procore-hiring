import React, { Component } from 'react';

class ContactsHdr extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e, this.props.column);
  }

  render() {
    var sortClass = (this.props.sortColumn === this.props.column) ? this.props.sortOrder : '';
    return (
      <th className={sortClass} onClick={this.handleClick}>
        {this.props.hdr}
      </th>
    );
  }
}

export default ContactsHdr;
