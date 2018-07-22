export const filterOpenTickets = () => (dispatch) => {
	console.log("filtering open");
	dispatch({
		type: "FILTER_OPEN_TICKETS"
	});
};

export const filterClosedTickets = () => (dispatch) => {
	console.log("filtering closed");
	dispatch({
		type: "FILTER_CLOSED_TICKETS"
	});
};

export const filterTicketsByTitle = text => (dispatch) => {
	dispatch({
		type: "FILTER_TICKETS_BY_TITLE",
		text: text
	});
};

export const applyFilters = () => (dispatch, getState) => {

	dispatch({
		type: "FETCH_FILTERED_TICKETS",
		myTickets: getState().myTickets,
		filters: getState().filters,
	});
};