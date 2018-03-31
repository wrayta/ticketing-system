import React, { Component } from 'react';

class App extends Component {
	state = {
		tickets: []
	};

	async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/dashboard/tickets/');
            const tickets = await res.json();
            this.setState({
                tickets
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="Ticket-container">
                {this.state.tickets.map(ticket => (
                	<div key={ticket.id}>
	                	<h1>{ticket.title}</h1>
	                	<p>Author: {ticket.author.name}</p>
	                	<p>Description: {ticket.description}</p>
	                	<p>Assignee: {ticket.assignee.email}</p>
	                </div>
                ))}
            </div>
        );
    }
}

export default App;
