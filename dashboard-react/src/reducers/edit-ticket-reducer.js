const editTicket = (state = null, action) => {
	switch(action.type) {
		case 'EDIT_TICKET':
		console.log('TICKET TO EDIT');
		console.log(JSON.stringify(action.tickets[action.id - 1]));
		return action.tickets[action.id - 1];
		default:
			return state;
	}
};

export const getTicketToEdit = (state) => state.editTicket;

export default editTicket;
