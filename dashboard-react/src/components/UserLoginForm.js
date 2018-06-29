import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { getLoginForm } from '../reducers/login-form-reducer';
// import { Field, reduxForm } from 'redux-form';

class UserLoginForm extends Component {

	onSubmit = e => {
		const { login, loginForm } = this.props;
		e.preventDefault();
		login(loginForm);
	}

	render() {
		const { handleUserLoginFormFieldUpdate } = this.props;

		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<label>Email:</label>
					<input type="text" id="email" onChange={e => handleUserLoginFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Password:</label>
					<input type="password" id="password" onChange={e => handleUserLoginFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<button type="submit">Login</button>
			</form>
		);
	}
};

const mapStateToUserLoginFormProps = (state) => {
	return {
		loginForm: getLoginForm(state),
	}
};

UserLoginForm = connect(
	mapStateToUserLoginFormProps,
	actions
)(UserLoginForm);

// UserLoginForm = reduxForm({
// 	form: 'userLoginForm'
// })(UserLoginForm);

export default UserLoginForm;