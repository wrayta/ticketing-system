import React, { Component } from 'react';
import UserLoginForm from './UserLoginForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class LoginRegisterPage extends Component {

	login = (values) => {
		const { loginUser, history } = this.props;

		loginUser(values);

		history.push('/dashboard/');
	}

	render() {
		
		return (
			<div>
				<h1>Login</h1>
				<table>
					<tr>
						<td> 
							<UserLoginForm onSubmit={this.login} /> 
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

LoginRegisterPage = connect(
	null,
	actions
)(LoginRegisterPage);

LoginRegisterPage = withRouter(LoginRegisterPage);

export default LoginRegisterPage;