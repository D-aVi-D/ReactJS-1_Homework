import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
			<table class="table table-hover"> 
				<thead> 
					<tr><th></th><th>Value Name
					</th><th><button class="btn btn-danger btn-xs" style="float:right;">Delete Marked</button></th></tr>
				</thead>
				<tbody>
					<tr id="row_1"><th scope="row"><input type="checkbox" id="checkbox_01" value="on"></th><td id="data-value">Буряк</td><td><button type="button" class="close" style="opacity:0.0;" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></td></tr>
					<tr id="row_2"><th scope="row"><input type="checkbox" id="checkbox_02" value="on"></th><td id="data-value">Капуста</td><td><button type="button" class="close" style="opacity:0.0;" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></td></tr>
					<tr id="row_3"><th scope="row"><input type="checkbox" id="checkbox_03" value="on"></th><td id="data-value">Морковь</td><td><button type="button" class="close" style="opacity:0.0;" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></td></tr>
            		<tr id="row_4"><th scope="row"><input type="checkbox" id="checkbox_03" value="on"></th><td id="data-value">Шпинат</td><td><button type="button" class="close" style="opacity:0.0;" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></td></tr>
            		<tr id="row_5"><th scope="row"><input type="checkbox" id="checkbox_03" value="on"></th><td id="data-value">Арбуз</td><td><button type="button" class="close" style="opacity:0.0;" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></td></tr>
				</tbody>
			</table>
        )
    }
}

export default UserList