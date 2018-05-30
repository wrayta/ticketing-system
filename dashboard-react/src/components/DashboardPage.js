import React from 'react';
import { connect } from 'react-redux';
import MyTicketsList from './MyTicketsList';
import TicketEditingPage from '../components/TicketEditingPage';
import * as actions from '../actions/index';
import { Route, Link } from 'react-router-dom';
import { getAuthentication } from '../reducers/authentication-reducer';

let DashboardPage = props => {
    const { user, logout } = props;
    return (
        <table>
            <tr>
                <td>
                    <Link exact
                    to='/create-ticket'>
                    Create Ticket
                    </Link>
                </td>
                <td>
                    <div style={{textAlign: "right"}}>
                        {user.name} (<a onClick={logout}>logout</a>)
                    </div>
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

const mapStateToDashboardPageProps = (state) => {
    return {
        user: getAuthentication(state).user,
    }
};

DashboardPage = connect(
    mapStateToDashboardPageProps,
    actions
)(DashboardPage);

export default DashboardPage;
