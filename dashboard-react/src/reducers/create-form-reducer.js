const initialState = {
	title: null,
	description: null,
	assignee: null
};

const createForm = (state = initialState, action) => {

	switch (action.type) {
		case 'LOCATION_CHANGE':
    		return {};

		case 'CREATE_FORM_INITIAL_STATE':
		case 'UPDATE_CREATE_ASSIGNEE':
			return {
				...state,
				assignee: action.values
			};

		case 'UPDATE_CREATE_TITLE':
			return {
				...state,
				title: action.values
			};

		case 'UPDATE_CREATE_DESCRIPTION':
			return {
				...state,
				description: action.values
			};

		default:
			return state;
	}
}

export const getCreateForm = (state) => state.createForm;

export default createForm;