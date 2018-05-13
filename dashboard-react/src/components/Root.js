import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DashboardPage from './DashboardPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateTicketPage from '../components/CreateTicketPage';
import { connect } from 'react-redux';
import LoginRegister from '../components/LoginRegisterPage';
import SignUpPage from '../components/SignUpPage';
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
						<Route exact path='/'
							component={LoginRegister} />
						<Route exact path='/sign-up'
							component={SignUpPage} />
						<Route path='/dashboard' 
							component={DashboardPage} />
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