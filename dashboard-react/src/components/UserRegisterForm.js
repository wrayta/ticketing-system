import React from 'react';
import { Field, reduxForm } from 'redux-form';

let UserRegisterForm = props => {

	const { handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name:</label>
				<Field name="first_name" component="input" type="text" /><br/>
			</div>

			<div>
				<label>Last Name:</label>
				<Field name="last_name" component="input" type="text" /><br/>
			</div>

			<div>
				<label>Email:</label>
				<Field name="email" component="input" type="text" /><br/>
			</div>

			<div>
				<label>Username:</label>
				<Field name="username" component="input" type="text" /><br/>
			</div>

			<div>
				<label>Password:</label>
				<Field name="password" component="input" type="text" /><br/>
			</div>

			<button type="submit">Sign Up</button>
		</form>
	);
};

UserRegisterForm = reduxForm({
	form: 'userRegisterForm'
})(UserRegisterForm);

export default UserRegisterForm;