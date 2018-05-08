import React from 'react';
import { getTicketToEdit } from '../reducers/edit-ticket-reducer';
import { getUsers } from '../reducers/users-reducer';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ObjectSelect from './ObjectSelect';

let TicketEditingForm = props => {

	const { ticket, users, handleSubmit, handleCancel } = props;

	let assigneeFields = [];

	users.map( (user) => {
		console.log("User id: " + user.id);
		console.log("User email: " + user.email);
		console.log("User name: " + user.first_name + ' ' + user.last_name);
		assigneeFields.push(
			{ id: user.id, email: user.email, name: user.first_name + ' ' + user.last_name }
		)}
	);

	console.log(assigneeFields[0]);

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
				<label>Status:</label><br/>
				Open <Field name="status" component="input" type="radio" value="OPEN" />{' '}
				Closed <Field name="status" component="input" type="radio" value="CLOSED" /><br/>
			</div>

			<div>
				<label>Created Date:</label> 
				<input type="text" name="created_date" readOnly value={ticket.created_date} /><br/>
			</div>

			<div>
				<label>Modified Date:</label>
				<input type="text" name="modified_date" readOnly value={ticket.modified_date} /><br/>
			</div>

			<div>
				<label>Author:</label>
				<input type="text" name="author" readOnly value={ticket.author.name} /><br/>
			</div>

			<div>
				<label>Assignee:</label>
				{ticket.assignee.name}<br/>
				<Field name="assignee" component={ObjectSelect} options={assigneeFields} /><br/>
			</div>

			<button type="button">Delete</button>
			<button type="button" onClick={handleCancel}>Cancel</button>
			<button type="submit">Save</button>
		</form>
	);

};

const mapStateToTicketEditingFormProps = (state) => {
	return {
		ticket: getTicketToEdit(state),
		users: getUsers(state),
	}
};

TicketEditingForm = connect(
	mapStateToTicketEditingFormProps,
	actions
)(TicketEditingForm);

TicketEditingForm = reduxForm({
	form: 'ticketEditingForm',
	enableReinitialize: true,
})(TicketEditingForm);

TicketEditingForm = connect(
	state => ({
		initialValues: getTicketToEdit(state)
	}),

)(TicketEditingForm);

export default TicketEditingForm;