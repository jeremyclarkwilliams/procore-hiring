import React, { Component } from 'react';

class ModalInput extends Component {
  render() {
    var field = null;
    var fieldId = this.props.fieldName.toLowerCase().replace(' ','-');
    if (this.props.fieldType === 'input') {
      field = <input type={this.props.inputType} className="field" id={fieldId} name={this.props.name} value={this.props.value} onChange={this.props.handleInputChange} />;
    } else if (this.props.fieldType === 'textarea') {
      field = <textarea className="field" id={fieldId} name={this.props.name} value={this.props.value} onChange={this.props.handleInputChange} />;
    }
    return (
      <label className={`label ${this.props.fieldType}`} htmlFor={fieldId}>
        {this.props.fieldName}
        {field}
      </label>
    );
  }
}

export default ModalInput;
