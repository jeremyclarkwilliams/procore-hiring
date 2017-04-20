import React from 'react';

function ContactsRow(props) {
  var contactCells = [];
  var contact = props.contact;
  for (var key in contact) {
    if (key !== 'disabled') {
      contactCells.push(<td key={key}>{contact[key]}</td>);
    }
  }
  return (
    <tr>
      {contactCells}
    </tr>
  );
}

export default ContactsRow;
