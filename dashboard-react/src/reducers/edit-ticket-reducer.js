const editTicket = (state = null, action) => {
	switch(action.type) {
		case 'EDIT_TICKET':
			console.log('TICKET TO EDIT');
			// console.log(action.tickets[action.id - 1]);
			console.log(action.tickets.find(ticket => ticket.id === action.id));
			return action.tickets.find(ticket => ticket.id === action.id);
		case 'UPDATE_TICKET':
			console.log('TICKET TO UPDATE');
			return state;
		default:
			return state;
	}
};

export const getTicketToEdit = (state) => state.editTicket;

export default editTicket;
