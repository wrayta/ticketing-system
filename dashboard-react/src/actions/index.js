import * as api from '../api';

export const fetchTickets = () => (dispatch) => {

	return api.fetchTickets().then(myTickets => {
		console.log("MY_TICKETS: ");
		console.log(myTickets.data);

		dispatch({
			type: 'FETCH_MY_TICKETS',
			myTickets: myTickets.data,
		});
	})
	.catch(error => {
		console.log(error);
	});      
};

export const editTicket = (id) => (dispatch, getState) => {
	const myTickets = getState().myTickets;
	dispatch({
		type: 'EDIT_TICKET',
		tickets: myTickets,
		id
	});

	api.fetchUsers().then(users => {
		console.log("USERS: ");
		console.log(users.data);

		dispatch({
			type: 'FETCH_USERS',
			users: users.data,
		});
	})
	.catch(error => {
		console.log(error);
	});
};

export const toggleShowing = () => (dispatch) => {
	dispatch({
		type: 'TOGGLE_SHOWING',
		isShowing: true
	});
};

export const updateTicket = (values) => (dispatch, getState) => {
	console.log(values);

	api.updateTicket(values).then(response => {
		console.log(response);
		console.log(response.data);
	})
	.catch(error => {
		console.log(error);
	});
};