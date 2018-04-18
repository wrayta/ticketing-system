import React from 'react';
import { connect } from 'react-redux';
import MyTicketsList from './MyTicketsList';
import TicketEditingContainer from '../containers/TicketEditingContainer';
import { getIsShowing } from '../reducers/ticket-editing-container-reducer';
import CreateTicket from '../containers/CreateTicketContainer';

let DashboardApp = props => {
    const { isShowing } = props;
    return (
        <table>
            <tr>
                <td><CreateTicket /></td>
            </tr>
            <tr>
                <td><MyTicketsList /></td>
                {isShowing && <TicketEditingContainer />}
            </tr>
        </table>
    );
}

const mapStateToDashboardProps = (state) => {
    return {
        isShowing: getIsShowing(state)
    }
};

DashboardApp = connect(
    mapStateToDashboardProps,
    null
)(DashboardApp);

export default DashboardApp;
