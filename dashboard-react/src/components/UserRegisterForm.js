import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { getRegisterForm } from '../reducers/register-form-reducer';

// import { Field, reduxForm } from 'redux-form';

class UserRegisterForm extends Component {

	onSubmit = e => {
		const { register, registerForm } = this.props;
		e.preventDefault();
		register(registerForm);

	}

	render() {
		const { handleRegisterFormFieldUpdate } = this.props;

		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<label>First Name:</label>
					<input type="text" id="first_name" onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Last Name:</label>
					<input type="text" id="last_name" onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Email:</label>
					<input type="text" id="email" onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Username:</label>
					<input type="text" id="username" onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Password:</label>
					<input type="password" id="password" onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<button type="submit">Sign Up</button>
			</form>
		);
	}
};

const mapStateToUserRegisterFormProps = (state) => {
	return {
		registerForm: getRegisterForm(state)
	}
};

UserRegisterForm = connect(
	mapStateToUserRegisterFormProps,
	actions
)(UserRegisterForm);

// UserRegisterForm = reduxForm({
// 	form: 'userRegisterForm'
// })(UserRegisterForm);

export default UserRegisterForm;