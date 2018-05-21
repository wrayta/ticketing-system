import * as api from '../api';

export const fetchMyTickets = () => (dispatch) => {

	return api.fetchMyTickets().then(myTickets => {
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

export const fetchUsers = () => (dispatch) => {
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

export const editTicket = (id) => (dispatch) => {

	// TODO: Make API call and query DB for ticket to edit (since modified_date is set in django back-end)
	return api.fetchTicket(id).then(ticket => {
		dispatch({
			type: 'EDIT_TICKET',
			ticket: ticket.data,
		});
	})
	.catch(error => {
		console.log(error);
	});

};

export const updateTicket = (values) => (dispatch) => {
	console.log(values);

	api.updateTicket(values).then(response => {
		console.log(response);
		console.log(response.data);

		dispatch({
			type: 'FETCH_MY_EDITED_TICKETS',
			editedTicket: values
		});
	})
	.catch(error => {
		console.log(error);
	});
};

export const createTicket = (values) => (dispatch) => {

	console.log('CREATE TICKET VALUES:');
	console.log(values.assignee.id);
	console.log(values.assignee.email);
	console.log(values.assignee.name);

	// values.author = values.assignee;

	api.createTicket(values).then(response => {

		dispatch({
			type: 'FETCH_MY_ADDED_TICKETS',
			createdTicket: response.data,
		});     
	})
	.catch(error => {
		console.log(error);
	});
};

export const loginUser = (values) => (dispatch) => {
	console.log("LOGIN_USER");
};

export const createUser = (values) => (dispatch) => {
	console.log("CREATE_USER");
	api.createUser(values);
};