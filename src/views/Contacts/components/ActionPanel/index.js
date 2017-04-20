import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/index.js';
import Button from '../../../../components/Button/index.js';
import iconPlus from '../../../../img/icon-plus.svg';

class ActionPanel extends Component {
  render() {
    return (
      <div className="action-panel">
        <SearchForm handleSearchSubmit={this.props.handleSearchSubmit} />
        <Button className="add-contact-btn"
          type="button"
          iconCircle={true}
          image={iconPlus}
          imageAlt="add"
          text="Add Contact"
          handleClick={this.props.handleAddClick} />
      </div>
    );
  }
}

export default ActionPanel;
