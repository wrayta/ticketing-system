const initialState = {
	email: null,
	password: null,
};

const loginForm = (state = initialState, action) => {

	switch (action.type) {
		case 'LOCATION_CHANGE':
    		return {};

		case 'UPDATE_LOGIN_EMAIL':
			return {
				...state,
				email: action.values
			};

		case 'UPDATE_LOGIN_PASSWORD':
			return {
				...state,
				password: action.values
			};

		default:
			return state;
	}
}

export const getLoginForm = (state) => state.loginForm;

export default loginForm;