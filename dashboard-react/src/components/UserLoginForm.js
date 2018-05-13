import React from 'react';
import { Field, reduxForm } from 'redux-form';

let UserLoginForm = props => {

	const { handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email:</label>
				<Field name="email" component="input" type="text" /><br/>
			</div>

			<div>
				<label>Password:</label>
				<Field name="password" component="input" type="text" /><br/>
			</div>

			<button type="submit">Login</button>
		</form>
	);
};

UserLoginForm = reduxForm({
	form: 'userLoginForm'
})(UserLoginForm);

export default UserLoginForm;