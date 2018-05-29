import React, { Component } from 'react';
import UserRegisterForm from './UserRegisterForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { getAuthentication } from '../reducers/authentication-reducer';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SignUpPage extends Component {

	register = (values) => {
		const { register, history } = this.props;

		register(values);

		// history.push('/');
	}

	render() {

		const { isRegistered } = this.props;

		if (isRegistered) {
	        return <Redirect to='/login/' />
	    }
		return (
			<div>
				<h1>Sign Up</h1> 
				<table>
					<tr>
						<td> 
							<UserRegisterForm onSubmit={this.register} /> 
						</td>
					</tr>
					<tr>
						<td> 
							<Link exact
		                    to='/login'>
		                    Already have an account?
		                    </Link>
	                    </td>
					</tr>
				</table>
			</div>
		);
	}
}

const mapStateToSignUpPageProps = (state) => {
	return {
		isRegistered: getAuthentication(state).isRegistered,
	}
};

SignUpPage = connect(
	mapStateToSignUpPageProps,
	actions
)(SignUpPage);

SignUpPage = withRouter(SignUpPage);

export default SignUpPage;