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
		const { handleRegisterFormFieldUpdate, errors } = this.props;

		return (
			<form onSubmit={this.onSubmit}>
				{errors != null && (
		            <ul>
		            	{Object.keys(errors).map( (errorKey, i) => (
		            		errors[errorKey] == null ? '' : <li key={i}>{errors[errorKey]}</li>
		            	))}
		            </ul>
          		)}
				<div>
					<label>First Name:</label>
					<input type="text" id="first_name" onBlur={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)} 
						onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Last Name:</label>
					<input type="text" id="last_name" onBlur={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)} 
						onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Email:</label>
					<input type="text" id="email" onBlur={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)} 
						onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Username:</label>
					<input type="text" id="username" onBlur={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)} 
						onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<div>
					<label>Password:</label>
					<input type="password" id="password" onBlur={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)} 
						onChange={e => handleRegisterFormFieldUpdate(e.target.id, e.target.value)}/><br/>
				</div>

				<button type="submit">Sign Up</button>
			</form>
		);
	}
};

const mapStateToUserRegisterFormProps = (state) => {
	// let errors = [];
	// if (state.authentication.errors) {
	//     errors = Object.keys(state.authentication.errors).map(field => {
	//        return {field, message: state.authentication.errors[field]};
	//     });
	// }
	return {
		errors: getRegisterForm(state).errors,
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