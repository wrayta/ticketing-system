import React from 'react';
import { connect } from 'react-redux';
import MyTicketsList from './MyTicketsList';
import TicketEditingContainer from '../containers/TicketEditingContainer';
import { Route, Link, Switch } from 'react-router-dom';

const DashboardHome = props => {
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
                    component={TicketEditingContainer} /> 
                </td>                             
            </tr>
        </table>
    );
}

export default DashboardHome;
