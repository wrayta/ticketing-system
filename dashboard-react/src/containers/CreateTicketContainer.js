import React from 'react';
import TicketCreatingForm from './TicketCreatingForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

let CreateTicketContainer = props => {
	const { createTicket } = props;
	return (
		<TicketCreatingForm onSubmit={createTicket} />
	);
};

CreateTicketContainer = connect(
	null,
	actions
)(CreateTicketContainer);

export default CreateTicketContainer;