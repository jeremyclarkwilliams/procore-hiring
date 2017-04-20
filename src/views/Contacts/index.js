import React, { Component } from 'react';
import ActionPanel from './components/ActionPanel/index.js';
import ContactsTable from './components/ContactsTable/index.js';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(query) {
    this.setState({
      searchQuery: query
    });
  }

  render() {
    return (
      <main className="content">
        <ActionPanel handleAddClick={this.props.handleAddClick} handleSearchSubmit={this.handleSearchSubmit} />
        <ContactsTable contacts={this.props.contacts} searchQuery={this.state.searchQuery} />
      </main>
    );
  }
}

export default Contacts;
