import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import './userlist.css'
import UserInfo from './userinfo.js';


var panelInstance = (
  <Panel collapsible defaultExpanded header="Current User Listing">
    <ListGroup fill>
      <ListGroupItem bsStyle="danger" href="#">John Doe #1</ListGroupItem>
      <ListGroupItem bsStyle="warning" href="#">John Doe #2</ListGroupItem>
      <ListGroupItem bsStyle="warning" href="#">John Doe #3</ListGroupItem>
      <ListGroupItem bsStyle="warning" href="#">John Doe #4</ListGroupItem>
      <ListGroupItem bsStyle="warning" href="#">&hellip;</ListGroupItem>
    </ListGroup>
  </Panel>
);

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            usersList: this.props.usersList
        }
    }

    render() {
      const { usersList } = this.state;
        return (
          (usersList.length > 0) ?
        	<div className="user-list">
            <Panel collapsible defaultExpanded header="Current User Listing">
              <ListGroup fill>
                { usersList.map( (elem, index, array) => {
                    return <ListGroupItem bsStyle="warning" href="#" id={index}>{elem.userName}</ListGroupItem>
                })}
                <ListGroupItem bsStyle="success" href="#">&hellip;</ListGroupItem>
              </ListGroup>
            </Panel>
            <UserInfo />
        	</div> : null
        )
    }
}

export default UserList