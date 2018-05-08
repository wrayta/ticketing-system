import React, { Component } from 'react';
import TicketEditingForm from './TicketEditingForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class TicketEditingContainer extends Component {

	handleUpdate = (values) => {
		const { updateTicket, history } = this.props;

		updateTicket(values);

		history.push('/dashboard/');
	}

	handleEditCancel = () => {
		const { history } = this.props;

		// toggleShowing();

		console.log('Canceling Ticket Editing');

		history.push('/dashboard/');
	}

	render() {
		
		return (
			<TicketEditingForm onSubmit={this.handleUpdate} handleCancel={this.handleEditCancel} />
		);
	}
}

// const mapStateToTicketEditingPageProps = (state) => {
// 	return {
// 		ticket: getTicketToEdit(state),
// 		users: getUsers(state)
// 	}
// };

TicketEditingContainer = connect(
	null,
	actions
)(TicketEditingContainer);

TicketEditingContainer = withRouter(TicketEditingContainer);

export default TicketEditingContainer;