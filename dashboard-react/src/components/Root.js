import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DashboardHome from './DashboardHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateTicketPage from '../components/CreateTicketPage';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class Root extends Component {

	componentDidMount() {
        const { fetchTickets, fetchUsers } = this.props;
        console.log('COMPONENT DID MOUNT');
        fetchTickets();
        fetchUsers();     
    }

	render() {
		const { store } = this.props;
		return(
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path='/dashboard' 
							component={DashboardHome} />
						<Route exact path='/create-ticket'
			                component={CreateTicketPage} />
		            </Switch>
				</Router>
			</Provider>
		);
	}
}

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

Root = connect(
	null,
	actions,
)(Root);

export default Root;