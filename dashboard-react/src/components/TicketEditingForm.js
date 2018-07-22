import React, { Component } from 'react';
import { getTicketToEdit } from '../reducers/edit-ticket-reducer';
import { getUsers } from '../reducers/users-reducer';
import { getEditForm } from '../reducers/edit-form-reducer';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { getAuthentication } from '../reducers/authentication-reducer';
import ObjectSelect from './ObjectSelect';

class TicketEditingForm extends Component {

	changeAssignee = (id, value) => {
		const { handleEditFormFieldUpdate } = this.props;

		handleEditFormFieldUpdate(id, value);
	}
	

	onSubmit = e => {
		const { handleUpdate, editForm } = this.props;
		e.preventDefault();
		handleUpdate(editForm);
	}

	render() {

		const { errors, ticket, editForm, users, loggedInUser, handleEditFormFieldUpdate, handleCancel, handleDelete } = this.props;

		return (
			<form onSubmit={this.onSubmit} key={ticket.id}>
				{errors != null && (
		            <ul>
		            	{Object.keys(errors).map( (errorKey, i) => (
		            		errors[errorKey] == null ? '' : <li key={i}>{errors[errorKey]}</li>
		            	))}
		            </ul>
          		)}
				<div>
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" defaultValue={ticket.title} onChange={e => handleEditFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label htmlFor="description">Description:</label>
					<input type="textarea" id="description" defaultValue={ticket.description} onChange={e => handleEditFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label htmlFor="status">Status:</label><br/>
					Open <input type="radio" id="open_status" checked={editForm.status === "OPEN" ? true : false} value="OPEN" onChange={e => handleEditFormFieldUpdate(e.target.id, e.target.value)}/>{' '}
					Closed <input type="radio" id="closed_status" checked={editForm.status === "CLOSED" ? true : false} value="CLOSED" onChange={e => handleEditFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label htmlFor="created_date">Created Date:</label> 
					<input type="text" id="created_date" readOnly={true} value={ticket.created_date} /><br/>
				</div>

				<div>
					<label htmlFor="modified_date">Modified Date:</label>
					<input type="text" id="modified_date" readOnly={true} value={ticket.modified_date} /><br/>
				</div>

				<div>
					<label htmlFor="author">Author:</label>
					<input type="text" id="author" readOnly={true} value={ticket.author.name} /><br/>
				</div>

				<div>
					<label htmlFor="assignee">Assignee:</label>
					{ticket.assignee.name}<br/>
					<ObjectSelect id="assignee" changeAssignee={this.changeAssignee} user={loggedInUser} options={users} /><br/>
				</div>

				<button type="button" onClick={() => handleDelete(ticket.id)}>Delete</button>
				<button type="button" onClick={handleCancel}>Cancel</button>
				<button type="submit">Save</button>
			</form>
		);
	}

}

const mapStateToTicketEditingFormProps = (state) => {
	return {
		ticket: getTicketToEdit(state),
		editForm: getEditForm(state),
		users: getUsers(state),
		loggedInUser: getAuthentication(state).user,
		errors: getEditForm(state).errors,
	}
};

TicketEditingForm = connect(
	mapStateToTicketEditingFormProps,
	actions
)(TicketEditingForm);

export default TicketEditingForm;