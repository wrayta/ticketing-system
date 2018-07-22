export const handleRegisterFormFieldUpdate = (formFieldId, value) => (dispatch, getState) => {
	switch (formFieldId) {
		case 'first_name':
			if (value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'First name' is a required field",
					error_field: 'first_name'
				});
			} else if (!/^[a-zA-Z]+$/.test(value)) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'First name' must contain only letters",
					error_field: 'first_name'
				});
			} else {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: null,
					error_field: 'first_name'
				});
			}

			dispatch({
				type: 'UPDATE_REGISTER_FIRST_NAME',
				values: value
			});
			break;

		case 'last_name':
			if (value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Last name' is a required field",
					error_field: 'last_name'
				});
			} else if (!/^[a-zA-Z]+$/.test(value)) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Last name' must contain only letters",
					error_field: 'last_name'
				});
			} else {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: null,
					error_field: 'last_name'
				});
			}

			dispatch({
				type: 'UPDATE_REGISTER_LAST_NAME',
				values: value
			});
			break;

		case 'email':
			if (value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Email' is a required field",
					error_field: 'email'
				});
			} else if (!/^[a-z]+\.+[a-z]+@+[a-z]+\.+[a-z]+$/.test(value)) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Email' must be of the format 'test.test@test.test'",
					error_field: 'email'
				});
			} else {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: null,
					error_field: 'email'
				});
			}

			dispatch({
				type: 'UPDATE_REGISTER_EMAIL',
				values: value
			});
			break;

		case 'username':
			if (value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Username' is a required field",
					error_field: 'username'
				});
			} else if (!/^[a-z]+\.+[a-z]+$/.test(value)) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Username' must be of the format 'test.test'",
					error_field: 'username'
				});
			} else {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: null,
					error_field: 'username'
				});
			}

			dispatch({
				type: 'UPDATE_REGISTER_USERNAME',
				values: value
			});
			break;

		case 'password':
			if (value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Password' is a required field",
					error_field: 'password'
				});
			} else if (!/^[a-zA-Z]+$/.test(value)) {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: "'Password' must contain only letters",
					error_field: 'password'
				});
			} else {
				dispatch({
					type: 'REGISTRATION_ERROR',
					values: null,
					error_field: 'password'
				});
			}

			dispatch({
				type: 'UPDATE_REGISTER_PASSWORD',
				values: value
			});
			break;

		default:
			break;
	}
};

export const handleUserLoginFormFieldUpdate = (formFieldId, value) => (dispatch, getState) => {
	switch (formFieldId) {
		case 'email':
			dispatch({
				type: 'UPDATE_LOGIN_EMAIL',
				values: value
			});
			break;

		case 'password':
			dispatch({
				type: 'UPDATE_LOGIN_PASSWORD',
				values: value
			});
			break;

		default:
			break;
	}
};

export const handleCreateFormFieldUpdate = (formFieldId, value) => (dispatch, getState) => {
	switch (formFieldId) {
		case 'title':
			if(value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'CREATE_TICKET_ERROR',
					values: "'Title' is a required field",
					error_field: 'title'
				});
			} else {
				dispatch({
					type: 'CREATE_TICKET_ERROR',
					values: null,
					error_field: 'title'
				});
			}
			dispatch({
				type: 'UPDATE_CREATE_TITLE',
				values: value
			});
			break;

		case 'description':
			if(value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'CREATE_TICKET_ERROR',
					values: "'Description' is a required field",
					error_field: 'description'
				});
			} else {
				dispatch({
					type: 'CREATE_TICKET_ERROR',
					values: null,
					error_field: 'description'
				});
			}

			dispatch({
				type: 'UPDATE_CREATE_DESCRIPTION',
				values: value
			});
			break;

		case 'assignee':
			dispatch({
				type: 'UPDATE_CREATE_ASSIGNEE',
				values: value
			});
			break;

		default: 
			break;
	}
};

export const handleEditFormFieldUpdate = (formFieldId, value) => (dispatch, getState) => {
	console.log(value);

	switch (formFieldId) {
		case 'title':
			if(value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'EDIT_TICKET_ERROR',
					values: "'Title' is a required field",
					error_field: 'title'
				});
			} else {
				dispatch({
					type: 'EDIT_TICKET_ERROR',
					values: null,
					error_field: 'title'
				});
			}
			dispatch({
				type: 'UPDATE_EDIT_TITLE',
				values: value
			});
			break;

		case 'description':
			if(value.trim().length <= 0 || value == null) {
				dispatch({
					type: 'EDIT_TICKET_ERROR',
					values: "'Description' is a required field",
					error_field: 'description'
				});
			} else {
				dispatch({
					type: 'EDIT_TICKET_ERROR',
					values: null,
					error_field: 'description'
				});
			}
			dispatch({
				type: 'UPDATE_EDIT_DESCRIPTION',
				values: value
			});
			break;

		case 'open_status':
			dispatch({
				type: 'UPDATE_EDIT_OPEN_STATUS',
				values: value
			});
			break;

		case 'closed_status':
			dispatch({
				type: 'UPDATE_EDIT_CLOSED_STATUS',
				values: value
			});
			break;

		case 'assignee':
			dispatch({
				type: 'UPDATE_EDIT_ASSIGNEE',
				values: value
			});
			break;

		default:
			break;
	}

};