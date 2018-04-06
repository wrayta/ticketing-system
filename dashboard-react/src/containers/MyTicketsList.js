// import React, { Component } from 'react'; 

// class MyTicketsList extends Component {

// 	clearContent = (id) => {
// 		document.getElementById('list-ticket-' + id).innerHTML = "";
// 	};

// 	render() {
// 		return (
// 			<table>
// 				<h1>My Tickets</h1>
// 		        {this.props.tickets.map(ticket => (
// 		        	<div id={"list-ticket-" + ticket.id} key={ticket.id} onClick={() => this.clearContent(ticket.id)}>
// 		        		<tr>
// 		        			<td>Title: {ticket.title}</td>
// 		        		</tr>
// 		        		<tr>
// 		        			<td>Author: {ticket.author.name}</td>
// 		        		</tr>
// 		        		<tr>
// 		        			<td>Description: {ticket.description}</td>
// 		        		</tr>
// 		        		<tr>
// 		        			<td>Assignee: {ticket.assignee.email}</td>
// 		        		</tr>
// 		            </div>
// 		        ))}
// 		    </table>
// 		);
// 	}
// };

// export default MyTicketsList;