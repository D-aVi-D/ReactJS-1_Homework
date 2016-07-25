import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Form from 'react-bootstrap/lib/Form';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import './useradd.css'


class UserAdd extends Component {
    constructor(props){
        super(props);
    }


    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }


    render() {
        return (
        	<div className='user-add-container'>
        		<Form inline>
              <FormGroup controlId="formInlineName">
              <ControlLabel>Enter new Name: </ControlLabel>
              {' '}
              <FormControl id="enteredName" type="text" placeholder="Enter Name" />
              </FormGroup>
              {' '}
              <Button id="addNameButton" bsStyle="success" type="submit" onClick={ this.props.handleAddUser }>
                Add New User
              </Button>
            </Form>
          </div>
        )
    }
}

export default UserAdd