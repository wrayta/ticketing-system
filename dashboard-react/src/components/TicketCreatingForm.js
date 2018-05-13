import React from 'react';
import { getUsers } from '../reducers/users-reducer';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ObjectSelect from './ObjectSelect';

let TicketCreatingForm = props => {

	const { users, handleSubmit, handleCancel } = props;

	// let assigneeFields = [];

	// users.map( (user) => {
		// console.log("User id: " + user.id);
		// console.log("User email: " + user.email);
		// console.log("User name: " + user.first_name + ' ' + user.last_name);
		// assigneeFields.push(
		// 	users
		// );
	// }
	// );

	// console.log(assigneeFields[0]);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Title:</label>
				<Field name="title" component="input" type="text" /><br/>
			</div>

			<div>
				<label>Description:</label>
				<Field name="description" component="textarea" type="text" /><br/>
			</div>

			<div>
				<label>Assignee:</label>
				<Field name="assignee" component={ObjectSelect} options={users} /><br/>
			</div>

			<button type="button" onClick={handleCancel}>Cancel</button>
			<button type="submit">Create</button>
		</form>
	);
};

const mapStateToTicketCreatingFormProps = (state) => {
	return {
		users: getUsers(state)
	}
};

TicketCreatingForm = connect(
	mapStateToTicketCreatingFormProps,
	actions
)(TicketCreatingForm);

TicketCreatingForm = reduxForm({
	form: 'ticketCreatingForm'
})(TicketCreatingForm);

export default TicketCreatingForm;