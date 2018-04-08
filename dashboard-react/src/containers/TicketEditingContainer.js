import React, { Component } from 'react';
import { getTicketToEdit } from '../reducers/edit-ticket-reducer';
import { connect } from 'react-redux';

class TicketEditingComponent extends Component {

	render() {
		const { ticket } = this.props;
		return (
			<table>
				<h2>Edit Ticket</h2>
				<tr>
					<td>Title: {ticket.title}</td>
				</tr>
				<tr>
					<td>Description: {ticket.description}</td>
				</tr>
				<tr>
					<td>Status: {ticket.status}</td>
				</tr>
				<tr>
					<td>Created Date: {ticket.created_date}</td>
				</tr>
				<tr>
					<td>Modified Date: {ticket.modified_date}</td>
				</tr>
				<tr>
					<td>Author: {ticket.author.name}</td>
				</tr>
				<tr>
					<td>Assignee: {ticket.assignee.name}</td>
				</tr>
			</table>
		);
	}
};

const mapStateToTicketEditingComponentProps = (state) => {
	return {
		ticket: getTicketToEdit(state)
	}
};

TicketEditingComponent = connect(
	mapStateToTicketEditingComponentProps,
	null
)(TicketEditingComponent);

export default TicketEditingComponent;