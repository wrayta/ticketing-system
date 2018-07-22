const initialState = {
	id: null,
	title: null,
	description: null,
	status: null,
	assignee: null,
	errors: {
		title: null,
		description: null,
	}
};

const editForm = (state = initialState, action) => {

	switch (action.type) {
		case 'EDIT_FORM_INITIAL_STATE':
			console.log('EDIT FORM INITIAL STATE');
			return {
				id: action.values.id,
				title: action.values.title,
				description: action.values.description,
				status: action.values.status,
				assignee: action.values.assignee,
			};

		case 'UPDATE_EDIT_TITLE':
			console.log('UPDATING TITLE');
			return {
				...state,
				title: action.values
			};

		case 'UPDATE_EDIT_DESCRIPTION':
			console.log('UPDATING DESCRIPTION');
			return {
				...state,
				description: action.values
			};

		case 'UPDATE_EDIT_OPEN_STATUS':
		case 'UPDATE_EDIT_CLOSED_STATUS':
			console.log('UPDATING STATUS');
			return {
				...state,
				status: action.values
			};

		case 'UPDATE_EDIT_ASSIGNEE':
			return {
				...state,
				assignee: action.values
			};
		case 'EDIT_TICKET_ERROR':
			return {
				...state,
				errors: {
					...state.errors,
					[action.error_field]: action.values
				}
			};

		default:
			return state;
	}
}

export const getEditForm = (state) => state.editForm;

export default editForm;