import React, { Component } from 'react';
import Header from './components/Header/index.js';
import Contacts from './views/Contacts/index.js';
import Modal from './views/Modal/index.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      modalActive: false
    }
    this.handleAddClick = this.handleAddClick.bind(this);
    this.onContactSubmit = this.onContactSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleAddClick(e) {
    this.setState({
      modalActive: true
    });
  }

  onContactSubmit(data) {
    var contacts = this.state.contacts;
    contacts.push(data);
    this.setState({
      contacts: contacts,
      modalActive: false
    });
  }

  handleModalClose(e) {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="app">
        <Header title="Contacts Keeper" />
        <Contacts contacts={this.state.contacts} handleAddClick={this.handleAddClick} />
        <Modal active={this.state.modalActive} onContactSubmit={this.onContactSubmit} handleModalClose={this.handleModalClose} />
      </div>
    );
  }
}

export default App;
