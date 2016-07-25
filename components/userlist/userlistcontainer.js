import React, { Component } from 'react';
import UserAdd from './useradd.js';
import UserList from './userlist.js';
import './userlistcontainer.css'

class UserListContainer extends Component {
    constructor(){
        super();
        this.state = {
            idCounter: 10,
            usersList: [{userName: 'External John Doe #1'}, 
                        {userName: 'External John Doe #2'},
                        {userName: 'External John Doe #3'},
                        {userName: 'External John Doe #4'}]
        }
        this.handleAddUser = this.handleAddUser.bind(this);
    }

handleAddUser(event) {
    console.log('Add handler executed');
    var users = [{userName: 'External John Doe #488889999'}]
    this.setState({ usersList: users });
}


    render() {
        return (
            <div className='user-list-container' class="container" id="container">
                    <UserAdd handleAddUser = {this.handleAddUser} />
                    <UserList usersList = {this.state.usersList}/>
            </div>
        )
    }
}

export default UserListContainer