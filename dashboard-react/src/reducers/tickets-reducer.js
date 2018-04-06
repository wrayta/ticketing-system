import { combineReducers } from 'redux';

const tickets = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_TICKETS':
			console.log('TICKETS ARE FETCHED');
			return action.tickets;
		case 'EDIT_TICKET':
			console.log('TICKET ID TO EDIT: ' + action.id);
			return state;
		default:
			return state;
	}
};

const ticketsReducer = combineReducers({
  tickets
});

export default ticketsReducer;

export const getMyTickets = (state) => state.tickets;