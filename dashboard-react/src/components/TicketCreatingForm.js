import React, { Component} from 'react';
import { getUsers } from '../reducers/users-reducer';
import { getCreateForm } from '../reducers/create-form-reducer';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import ObjectSelect from './ObjectSelect';
import { getAuthentication } from '../reducers/authentication-reducer';

class TicketCreatingForm extends Component {

	changeAssignee = (id, value) => {
		const { handleCreateFormFieldUpdate } = this.props;

		handleCreateFormFieldUpdate(id, value);	
	}

	onSubmit = e => {
		const { handleCreate, createForm } = this.props;
		e.preventDefault();
		handleCreate(createForm);
	}

	render() {
		const { users, handleCreateFormFieldUpdate, handleCancel, loggedInUser, errors } = this.props;

		return (
			<form onSubmit={this.onSubmit}>
				{errors != null && (
		            <ul>
		            	{Object.keys(errors).map( (errorKey, i) => (
		            		errors[errorKey] == null ? '' : <li key={i}>{errors[errorKey]}</li>
		            	))}
		            </ul>
          		)}
				<div>
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" onBlur={e => handleCreateFormFieldUpdate(e.target.id, e.target.value)} onChange={e => handleCreateFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label htmlFor="description">Description:</label>
					<input type="textarea" id="description" onBlur={e => handleCreateFormFieldUpdate(e.target.id, e.target.value)} onChange={e => handleCreateFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label htmlFor="assignee">Assignee:</label>
					<ObjectSelect id="assignee" changeAssignee={this.changeAssignee} user={loggedInUser} options={users} /><br/>
				</div>

				<button type="button" onClick={handleCancel}>Cancel</button>
				<button type="submit">Create</button>
			</form>
		);
	}
}

const mapStateToTicketCreatingFormProps = (state) => {
	return {
		users: getUsers(state),
		loggedInUser: getAuthentication(state).user,
		createForm: getCreateForm(state),
		errors: getCreateForm(state).errors,
	}
};

TicketCreatingForm = connect(
	mapStateToTicketCreatingFormProps,
	actions
)(TicketCreatingForm);

// TicketCreatingForm = reduxForm({
// 	form: 'ticketCreatingForm'
// })(TicketCreatingForm);

// TicketCreatingForm = connect(
// 	state => ({
// 		initialValues: {
// 			assignee: getAuthentication(state).user
// 		}
// 	}),

// )(TicketCreatingForm);

export default TicketCreatingForm;