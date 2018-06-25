const myFilteredTickets = (state = [], action) => {
	switch(action.type) {
		case 'FETCH_FILTERED_TICKETS':
			let filteredTickets = [];
			let firstFilteredTickets = [];
			let secondFilteredTickets = [];
			let thirdFilteredTickets = [];

			console.log('FETCHING FILTERED TICKETS');
			if(action.filters.open || action.filters.closed || action.filters.title) {

				// if all filters are on then only pay attention to the 'title'
				if(action.filters.title && action.filters.open && action.filters.closed) {
					firstFilteredTickets = action.myTickets.filter(ticket => ticket.title.includes(action.filters.title));
					return firstFilteredTickets;
				}

				// filter all user's tickets by title
				if(action.filters.title) {
					firstFilteredTickets = action.myTickets.filter(ticket => ticket.title.includes(action.filters.title));
					filteredTickets = firstFilteredTickets;
				}

				// if 'title' is on, filter the results of 'title' by 'open' status
				// else filter all user's tickets by 'open' status
				if(action.filters.open) {
					if(action.filters.title) {
						secondFilteredTickets = filteredTickets.filter(ticket => ticket.status.includes("OPEN"));
						filteredTickets = secondFilteredTickets;
					} else {
						filteredTickets = action.myTickets.filter(ticket => ticket.status.includes("OPEN"));
					}
				}

				// if 'title' is on, filter the results of 'title' by 'closed' status
				// else filter all user's tickets by 'closed' status, combining with the
				// results of 'open', in case that filter has been applied
				if(action.filters.closed) {
					if(action.filters.title) {
						thirdFilteredTickets = filteredTickets.filter(ticket => ticket.status.includes("CLOSED"));
						filteredTickets = thirdFilteredTickets;
					} else {
						thirdFilteredTickets = action.myTickets.filter(ticket => ticket.status.includes("CLOSED"));
						filteredTickets.push(...thirdFilteredTickets);
					}
				}

				return filteredTickets;

			}  

			return action.myTickets;

		default:
			return state;
	}
};

export const getMyFilteredTickets = (state) => state.myFilteredTickets;

export default myFilteredTickets;