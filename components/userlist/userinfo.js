import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

class UserInfo extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button bsStyle="danger" onClick={ ()=> this.setState({ open: !this.state.open })}>
          Show info
        </Button>
        <Panel collapsible expanded={this.state.open}>
          User detailed information
        </Panel>
      </div>
    );
  }
}

export default UserInfo