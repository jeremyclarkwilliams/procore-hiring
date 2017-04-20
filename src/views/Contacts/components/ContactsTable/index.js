import React, { Component } from 'react';
import ContactsHdr from '../../components/ContactsHdr/index.js';
import ContactsRow from '../../components/ContactsRow/index.js';

RegExp.escape = function(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
};

class ContactsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false,
      sortOrder: '',
      sortColumn: ''
    }
    this.filterContacts = this.filterContacts.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  filterContacts(query, contacts) {
    // filter based on search
    var searchRegex = new RegExp(RegExp.escape(query), 'ig');
    contacts = contacts.filter(function(contact, index) {
      for (var key in contact) {
        if (searchRegex.test(contact[key])) {
          return true;
        }
      }
      return false;
    });
    // sort if needed
    if (this.state.sort) {
      var column = this.state.sortColumn;
      var order = this.state.sortOrder;
      contacts.sort(function(a, b) {
        if (order === 'asc') {
          return a[column].localeCompare(b[column]);
        } else {
          return b[column].localeCompare(a[column]);
        }
      });
    }
    // return rows
    return contacts.map(function(contact, index) {
      return <ContactsRow contact={contact} key={index} />;
    });
  }

  updateSort(e, column) {
    var order = '';
    if (this.state.sortColumn !== column) {
      order = 'asc';
    } else {
      if (this.state.sortOrder !== 'asc') {
        order = 'asc';
      } else {
        order = 'desc';
      }
    }
    this.setState({
      sort: true,
      sortOrder: order,
      sortColumn: column
    });
  }

  render() {
    var contacts = this.props.contacts;
    var contactRows = this.filterContacts(this.props.searchQuery, contacts);
    var sortColumn = this.state.sortColumn;
    var sortOrder = this.state.sortOrder;
    return (
      <table className="contacts-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <ContactsHdr sortOrder={sortOrder} sortColumn={sortColumn} handleClick={this.updateSort} hdr="First Name" column="firstName" />
            <ContactsHdr sortOrder={sortOrder} sortColumn={sortColumn} handleClick={this.updateSort} hdr="Last Name" column="lastName" />
            <ContactsHdr sortOrder={sortOrder} sortColumn={sortColumn} handleClick={this.updateSort} hdr="Date of Birth" column="dob" />
            <ContactsHdr sortOrder={sortOrder} sortColumn={sortColumn} handleClick={this.updateSort} hdr="Phone" column="phone" />
            <ContactsHdr sortOrder={sortOrder} sortColumn={sortColumn} handleClick={this.updateSort} hdr="Email" column="email" />
            <ContactsHdr sortOrder={sortOrder} sortColumn={sortColumn} handleClick={this.updateSort} hdr="Notes" column="notes" />
          </tr>
        </thead>
        <tbody>
          {contactRows}
        </tbody>
      </table>
    );
  }
}

export default ContactsTable;
