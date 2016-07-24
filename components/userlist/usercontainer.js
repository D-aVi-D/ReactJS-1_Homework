import React, { Component } from 'react';
import UserAdd from './useradd.js';
import UserList from './userlist.js';
import './bootstrap/bootstrap.min.css'
import './usercontainer.css'

class UserListContainer extends Component {
    render() {
        return (
            <div className='usercontainer' class="container" id="container">
                <div class="row">
                    <br/>
                    <br/>
                        <div class="col-sm-6 col-sm-offset-3">
                            <UserAdd />
                            <UserList />
                        </div>
            
                </div>
            </div>


        )
    }
}

export default UserListContainer