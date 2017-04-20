import React, { Component } from 'react';
import ModalHeader from '../../components/ModalHeader/index.js';
import ModalInput from '../../components/ModalInput/index.js';
import ModalFooter from '../../components/ModalFooter/index.js';

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      email: '',
      notes: '',
      disabled: true
    };
    this.checkForEmptyInputs = this.checkForEmptyInputs.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  checkForEmptyInputs() {
    var data = this.state;
    if (data.firstName === ''
      || data.lastName === ''
      || data.dob === ''
      || data.phone === ''
      || data.email === '') {
      return true;
    }
    return false;
  }

  handleInputChange(e) {
    var name = e.target.name;
    var value = e.target.value.trim();
    this.setState({
      [name]: value
    }, function() {
      this.setState({
        disabled: this.checkForEmptyInputs()
      });
    }.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    var data = this.state;
    this.props.onContactSubmit(data);
    this.resetForm(e.target);
  }

  resetForm(form) {
    form.reset();
    this.setState({
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      email: '',
      notes: '',
      disabled: true
    });
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit} id="contact-form">
        <ModalHeader title="Add Contact" handleModalClose={this.props.handleModalClose} resetForm={this.resetForm} />
        <ModalInput name="firstName" fieldName="First Name" fieldType="input" inputType="text" handleInputChange={this.handleInputChange} />
        <ModalInput name="lastName" fieldName="Last Name" fieldType="input" inputType="text" handleInputChange={this.handleInputChange} />
        <ModalInput name="dob" fieldName="Date of Birth" fieldType="input" inputType="text" handleInputChange={this.handleInputChange} />
        <ModalInput name="phone" fieldName="Phone Number" fieldType="input" inputType="tel" handleInputChange={this.handleInputChange} />
        <ModalInput name="email" fieldName="Email" fieldType="input" inputType="email" handleInputChange={this.handleInputChange} />
        <ModalInput name="notes" fieldName="Notes" fieldType="textarea" inputType="" handleInputChange={this.handleInputChange} />
        <ModalFooter disabled={this.state.disabled} />
      </form>
    );
  }
}

export default ModalForm;
