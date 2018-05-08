const myTickets = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_MY_TICKETS':
			console.log('MY TICKETS ARE FETCHED');
			return action.myTickets;
		case 'FETCH_MY_EDITED_TICKETS':
			console.log('MY EDITED TICKETS ARE FETCHED');
			return state.map( (ticket) => {
				if(ticket.id !== action.editedTicket.id) {
					return ticket;
				}

				return {	
					...action.editedTicket,
					assignee: {
						...action.editedTicket.assignee,
					},	
				};
			});
		case 'FETCH_MY_ADDED_TICKETS':
			return [
				...state, 
				action.createdTicket
			];
		default:
			return state;
	}
};

export const getMyTickets = (state) => state.myTickets;

export default myTickets;