import * as api from '../api';
import moment from 'moment';

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
		// isShowing: true
	});
};

export const updateTicket = (values) => (dispatch, getState) => {
	console.log(values);

	console.log('timestamp: ' + moment().format());

	values.modified_date = moment().format();

	api.updateTicket(values).then(response => {
		console.log(response);
		console.log(response.data);
		dispatch({
			type: 'TOGGLE_SHOWING',
			// isShowing: false
		});

		dispatch({
			type: 'FETCH_MY_EDITED_TICKETS',
			editedTicket: values
		});
	})
	.catch(error => {
		console.log(error);
	});
};

export const handleEditCancel = () => (dispatch) => {
	dispatch({
		type: 'TOGGLE_SHOWING',
	});
};