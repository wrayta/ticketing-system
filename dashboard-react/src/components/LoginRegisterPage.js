import React, { Component } from 'react';
import UserLoginForm from './UserLoginForm';
import * as actions from '../actions/index';
import { getAuthentication } from '../reducers/authentication-reducer';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';

class LoginRegisterPage extends Component {

	login = (values) => {
		const { login, history } = this.props;

		login(values);

		// history.push('/dashboard/');
	}

	render() {

		const { isAuthenticated }  = this.props;
		if (isAuthenticated) {
			return <Redirect to='/dashboard/' />
		}
		
		return (
			<div>
				<h1>Login</h1>
				<table>
					<tr>
						<td> 
							<UserLoginForm login={this.login} /> 
						</td>
					</tr>
					<tr>
						<td> 
							<Link exact
		                    to='/sign-up'>
		                    Sign Up
		                    </Link>
	                    </td>
					</tr>
				</table>
			</div>
		);
	}
}

const mapStateToLoginRegisterPageProps = (state) => {
	return {
		isAuthenticated: getAuthentication(state).isAuthenticated,
	}
};

LoginRegisterPage = connect(
	mapStateToLoginRegisterPageProps,
	actions
)(LoginRegisterPage);

LoginRegisterPage = withRouter(LoginRegisterPage);

export default LoginRegisterPage;