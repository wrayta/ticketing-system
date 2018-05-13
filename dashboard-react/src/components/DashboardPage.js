import React from 'react';
import { connect } from 'react-redux';
import MyTicketsList from './MyTicketsList';
import TicketEditingPage from '../components/TicketEditingPage';
import { Route, Link } from 'react-router-dom';

const DashboardPage = props => {
    return (
        <table>
            <tr>
                <td>
                    <Link exact
                    to='/create-ticket'>
                    Create Ticket
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <MyTicketsList />
                </td>
                <td>
                    <Route exact path='/dashboard/edit-ticket/:id'
                    component={TicketEditingPage} /> 
                </td>                             
            </tr>
        </table>
    );
}

export default DashboardPage;
