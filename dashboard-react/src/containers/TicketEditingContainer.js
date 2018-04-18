import React from 'react';
import TicketEditingForm from './TicketEditingForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

let TicketEditingContainer = props => {
	const { updateTicket } = props;
	return (
		<TicketEditingForm onSubmit={updateTicket} />
	);
};

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

export default TicketEditingContainer;