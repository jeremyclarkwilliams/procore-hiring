import React, { Component } from 'react';
import Button from '../../../../components/Button/index.js';
import iconSearch from '../../../../img/icon-search.svg';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearchSubmit(this.state.value);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="text" className="search-field" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
        <Button className="search-submit-btn"
          type="submit"
          icon={true}
          image={iconSearch}
          imageAlt="search" />
      </form>
    );
  }
}

export default SearchForm;
