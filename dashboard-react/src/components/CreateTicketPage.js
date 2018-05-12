import React, { Component } from 'react';
import TicketCreatingForm from './TicketCreatingForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CreateTicketPage extends Component {

	handleCreate = (values) => {
		const { createTicket, history } = this.props;

		createTicket(values);

		history.push('/dashboard/');
	}

	handleCreateCancel = () => {
		const { history } = this.props;

		// toggleShowing();

		console.log('Canceling Ticket Creation');

		history.push('/dashboard/');
	}

	render() {
		
		return (
			<TicketCreatingForm onSubmit={this.handleCreate} handleCancel={this.handleCreateCancel} />
		);
	}
};

CreateTicketPage = connect(
	null,
	actions
)(CreateTicketPage);

CreateTicketPage = withRouter(CreateTicketPage);

export default CreateTicketPage;