const initialState = {
    open: false,
    closed: false,
    title: null,
};

const filters = (state = initialState, action) => {

    switch (action.type) {
    	case "LOCATION_CHANGE": {
    		return {};
    	}

    	case "FILTER_OPEN_TICKETS":
    		return {
    			...state,
    			open: !state.open
    		};

    	case "FILTER_CLOSED_TICKETS":
    		return {
    			...state,
    			closed: !state.closed
    		};

    	case "FILTER_TICKETS_BY_TITLE":
    		return {
    			...state,
    			title: action.text
    		};
    	default:
    		return state;
    }
};

export const getFilters = (state) => state.filters;

export default filters;