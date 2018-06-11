import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchTickets } from '../actions/index';
import { getMyFilteredTickets } from '../reducers/filtered-tickets-reducer';
// import { getIsShowing } from '../reducers/ticket-editing-container-reducer';
import * as actions from '../actions/index'
import { withRouter } from 'react-router-dom';
import MyFilteredList from './MyFilteredList';

class MyTicketsList extends Component {

    componentDidMount() {
        const { fetchMyTickets } = this.props;

        fetchMyTickets();
    }
    // componentWillUpdate() {
    //     const { fetchMyTickets } = this.props;
    //     console.log('COMPONENT DID MOUNT');
    //     fetchMyTickets();
    //     // fetchUsers();     
    // }

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

    render() {
        const { tickets } = this.props;
        return (
            <MyFilteredList tickets={tickets} />
        );
    }
}

const mapStateToMyTicketsListProps = (state) => {
    return {
        tickets: getMyFilteredTickets(state),
        // isShowing: getIsShowing(state)
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

MyTicketsList = withRouter(MyTicketsList);

export default MyTicketsList;