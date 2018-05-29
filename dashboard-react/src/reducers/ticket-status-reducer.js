const initialState = {
    isCreated: null,
    isEdited: null,
    isDeleted: null,
    errors: {},
};

const ticketStatus = (state = initialState, action) => {

    switch (action.type) {

    	case 'TICKET_SUCCESSFULLY_CREATED':
    		return {
    			...state,
    			isCreated: true,
    		};
    	case 'TICKET_SUCCESSFULLY_EDITED':
    		return {
    			...state,
    			isEdited: true,
    		};
    	case 'TICKET_SUCCESSFULLY_DELETED':
    		return {
    			...state,
    			isDeleted: true,
    		};
    	case 'TICKET_CREATION_FAILED':
    		return {
    			...state,
    			isCreated: false,
    		};
    	case 'TICKET_EDIT_FAILED':
    		return {
    			...state,
    			isEdited: false,
    		};
    	case 'TICKET_DELETION_FAILED':
    		return {
    			...state,
    			isDeleted: false,
    		};
    	default:
    		return state;
    }
};

export const getTicketStatus = (state) => state.ticketStatus;

export default ticketStatus;