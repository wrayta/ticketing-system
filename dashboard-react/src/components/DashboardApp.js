import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyTicketsList from './MyTicketsList';
import TicketEditingContainer from '../containers/TicketEditingContainer';
import { getIsShowing } from '../reducers/ticket-editing-container-reducer';

class DashboardApp extends Component {
    render() {
        const { isShowing } = this.props;
        return (
            <table>
                <tr>
                    <td><MyTicketsList /></td>
                    {isShowing && <TicketEditingContainer />}
                </tr>
            </table>
        );
    }
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
