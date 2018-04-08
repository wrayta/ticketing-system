import * as api from '../api';

export const fetchTickets = () => (dispatch) => {

	return api.connectToDatabase().then(connection => {
		api.fetchTickets(connection).then(myTickets => {
			console.log("JSON: ");
    		console.log(JSON.stringify(myTickets));

			dispatch({
				type: 'FETCH_MY_TICKETS',
				myTickets: myTickets,
			});
		});
	});      

};

export const editTicket = (id) => (dispatch, getState) => {
	const myTickets = getState().myTickets;
	dispatch({
		type: 'EDIT_TICKET',
		tickets: myTickets,
		id
	});
};

export const toggleShowing = () => (dispatch) => {
	dispatch({
		type: 'TOGGLE_SHOWING',
		isShowing: true
	});
};