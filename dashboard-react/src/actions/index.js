import * as api from '../api';

export const fetchTickets = () => (dispatch) => {

	return api.connectToDatabase().then(connection => {
		api.fetchTickets(connection).then(tickets => {
			console.log("JSON: ");
    		console.log(JSON.stringify(tickets));

			dispatch({
				type: 'FETCH_TICKETS',
				tickets: tickets,
			});
		});
	});      

};

export const editTicket = (id) => ({
	type: 'EDIT_TICKET',
	id
});