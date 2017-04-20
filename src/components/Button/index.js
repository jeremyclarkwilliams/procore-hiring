import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button type={this.props.type} className={`btn ${this.props.className}`} disabled={this.props.disabled} onClick={this.props.handleClick}>
        {this.props.iconCircle && <span className="icon-circle"><img src={this.props.image} alt={this.props.imageAlt} /></span>}
        {this.props.icon && <img src={this.props.image} alt={this.props.imageAlt} />}
        {this.props.text && <span className="btn-text">{this.props.text}</span>}
      </button>
    );
  }
}

export default Button;
