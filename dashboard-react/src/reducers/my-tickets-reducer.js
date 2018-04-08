const myTickets = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_MY_TICKETS':
			console.log('MY TICKETS ARE FETCHED');
			return action.myTickets;
		default:
			return state;
	}
};

export const getMyTickets = (state) => state.myTickets;

export default myTickets;