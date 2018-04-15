import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchTickets } from '../actions/index';
import { getMyTickets } from '../reducers/my-tickets-reducer';
import * as actions from '../actions/index'

class MyTicketsList extends Component {

    componentDidMount() {
        const { fetchTickets } = this.props;
        console.log('COMPONENT DID MOUNT');
        fetchTickets();     
    }

    // async fetchMyTickets() {
        
    //     fetchTickets();
    //     // try {
    //     //     const connection = await fetch('http://127.0.0.1:8000/dashboard/tickets/');
    //     //     const tickets = await connection.json();
    //     //      // this.setState({
    //     //      //     tickets
    //     //      // });
    //     // } catch (e) {
    //     //     console.log(e);
    //     // }
    // }

    handleTicketClick(id) {
        const { editTicket, toggleShowing } = this.props;
        toggleShowing();
        editTicket(id);        
    }

    render() {
        const { tickets } = this.props;
        return (
            <div>
                <h1>My Tickets</h1>
                <table>
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
                        </div>
                    ))}
                </table>
            </div>
        );
    }
}

const mapStateToMyTicketsListProps = (state) => {
    return {
        tickets: getMyTickets(state)
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     onTicketClick (id) {
//         dispatch(
//             editTicket(id)
//         );
//     }
// });

MyTicketsList = connect(
    mapStateToMyTicketsListProps,
    actions,
)(MyTicketsList);

export default MyTicketsList;