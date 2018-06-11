import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import { withRouter } from 'react-router-dom';


class MyFilteredList extends Component {

	handleTicketClick(id) {
        const { editTicket, history } = this.props;
        // toggleShowing();
        editTicket(id).then( () => {
                history.push(`/dashboard/edit-ticket/${id}`);
            }
        );       
    }

    render() {

		const { tickets } = this.props;

		return (
	        <div>
	            <h1>My Tickets</h1>
	            <tbody>
	                {tickets.map(ticket => (
	                    <div id={"list-ticket-" + ticket.id} key={ticket.id} onClick={() => this.handleTicketClick(ticket.id)}>
	                        <tr>
	                            <td>Title: {ticket.title}</td>
	                        </tr>
	                        <tr>
	                            <td>Author: {ticket.author.name}</td>
	                        </tr>
	                        <tr>
	                            <td>Description: {ticket.description}</td>
	                        </tr>
	                        <tr>
	                            <td>Assignee: {ticket.assignee.email}</td>
	                        </tr>
	                        <tr><br/></tr>
	                    </div>
	                ))}
	            </tbody>
	        </div>
	    );
	}
}

MyFilteredList = connect(
	null,
    actions,
)(MyFilteredList);

MyFilteredList = withRouter(MyFilteredList);

export default MyFilteredList;