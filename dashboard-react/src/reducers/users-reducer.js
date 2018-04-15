const users = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USERS':
			console.log('MY USERS ARE FETCHED');
			return action.users;
		default:
			return state;
	}
};

export const getUsers = (state) => state.users;

export default users;