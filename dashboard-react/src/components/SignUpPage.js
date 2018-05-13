import React, { Component } from 'react';
import UserRegisterForm from './UserRegisterForm';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SignUpPage extends Component {

	register = (values) => {
		const { createUser, history } = this.props;

		createUser(values);

		history.push('/');
	}

	render() {
		
		return (
			<div>
				<h1>Sign Up</h1> 
				<UserRegisterForm onSubmit={this.register} /> 
			</div>
		);
	}
}

SignUpPage = connect(
	null,
	actions
)(SignUpPage);

SignUpPage = withRouter(SignUpPage);

export default SignUpPage;