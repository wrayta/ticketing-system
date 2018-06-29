const initialState = {
	first_name: null,
	last_name: null,
	email: null,
	username: null,
	password: null
};

const registerForm = (state = initialState, action) => {

	switch (action.type) {
		case 'LOCATION_CHANGE':
    		return {};

		case 'UPDATE_REGISTER_FIRST_NAME':
			return {
				...state,
				first_name: action.values
			};

		case 'UPDATE_REGISTER_LAST_NAME':
			return {
				...state,
				last_name: action.values
			};

		case 'UPDATE_REGISTER_EMAIL':
			return {
				...state,
				email: action.values
			};

		case 'UPDATE_REGISTER_USERNAME':
			return {
				...state,
				username: action.values
			};
			
		case 'UPDATE_REGISTER_PASSWORD':
			return {
				...state,
				password: action.values
			};

		default:
			return state;
	}
}

export const getRegisterForm = (state) => state.registerForm;

export default registerForm;