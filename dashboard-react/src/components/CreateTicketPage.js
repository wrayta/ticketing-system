import React, { Component } from 'react';
import TicketCreatingForm from './TicketCreatingForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
// import { getTicketStatus } from '../reducers/ticket-status-reducer';
import { withRouter } from 'react-router-dom';

class CreateTicketPage extends Component {

	handleCreate = (values) => {
		const { createTicket, history } = this.props;

		createTicket(values).then( () => {
			history.push('/dashboard/');
		});
	}

	handleCreateCancel = () => {
		const { history } = this.props;

		// toggleShowing();

		console.log('Canceling Ticket Creation');

		history.push('/dashboard/');
	}

	render() {
		// const { isCreated } = this.props;

		// if (isCreated) {
	 //        return <Redirect to='/dashboard/' />
	 //    }
		return (
			<TicketCreatingForm handleCreate={this.handleCreate} handleCancel={this.handleCreateCancel} />
		);
	}
};

// const mapStateToCreateTicketPageProps = (state) => {
// 	return {
// 		isCreated: getTicketStatus(state).isCreated,
// 	}
// };

CreateTicketPage = connect(
	null,
	actions
)(CreateTicketPage);

CreateTicketPage = withRouter(CreateTicketPage);

export default CreateTicketPage;