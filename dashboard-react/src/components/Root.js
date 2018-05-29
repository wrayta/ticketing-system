import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DashboardPage from './DashboardPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateTicketPage from '../components/CreateTicketPage';
import { connect } from 'react-redux';
import LoginRegister from '../components/LoginRegisterPage';
import SignUpPage from '../components/SignUpPage';
import { getAuthentication } from '../reducers/authentication-reducer';
import * as actions from '../actions/index'

class Root extends Component {

	componentDidMount() {
        const { fetchUsers, loadUser } = this.props;
        console.log('COMPONENT DID MOUNT');
        loadUser();
        fetchUsers();     
    }

	PrivateRoute = ({component: ChildComponent, ...rest}) => {
	    return <Route {...rest} render = {props => {
	    	const { authentication } = this.props;
	        if (authentication.isLoading) {
	            return <em>Loading...</em>;
	        } else if (!authentication.isAuthenticated) {
	            return <Redirect to="/login" />;
	        } else {
	            return <ChildComponent {...props} />
	        }
	    }} />
	  }

	render() {
		let {PrivateRoute} = this;

		const { store } = this.props;

		return(
			<Provider store={store}>
				<Router>
					<Switch>
						<PrivateRoute exact path='/'
							component={LoginRegister} />
						<Route exact path='/login'
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

const mapStateToRootProps = (state) => {
	return {
		authentication: getAuthentication(state),
	}
};

Root = connect(
	mapStateToRootProps,
	actions,
)(Root);

export default Root;