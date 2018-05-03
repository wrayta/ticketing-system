import React from 'react';
import { Provider } from 'react-redux';
import DashboardHome from './DashboardHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateTicket from '../containers/CreateTicketContainer';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/dashboard' 
					component={DashboardHome} />
				<Route exact path='/create-ticket'
	                component={CreateTicket} />
            </Switch>
		</Router>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;