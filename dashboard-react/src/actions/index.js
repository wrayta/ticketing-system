import * as api from '../api';

import { handleRegisterFormFieldUpdate, 
		handleUserLoginFormFieldUpdate,
		handleCreateFormFieldUpdate,
		handleEditFormFieldUpdate, } from './form-actions';

import { editTicket,
		updateTicket,
		deleteTicket,
		createTicket, } from './ticket-actions';

import { filterOpenTickets,
		filterClosedTickets,
		filterTicketsByTitle,
		applyFilters, } from './filter-actions';

import { loadUser,
		login,
		register,
		logout, } from './authentication-actions';

export { handleRegisterFormFieldUpdate, 
		handleUserLoginFormFieldUpdate,
		handleCreateFormFieldUpdate,
		handleEditFormFieldUpdate,
		editTicket,
		updateTicket,
		deleteTicket,
		createTicket,
		filterOpenTickets,
		filterClosedTickets,
		filterTicketsByTitle,
		applyFilters, 
		loadUser,
		login,
		register,
		logout, };

export const fetchMyTickets = () => (dispatch, getState) => {

	dispatch({
		type: 'LOCATION_CHANGE'
	});

	let headers = {"Content-Type": "application/json"};

	let {token} = getState().authentication;

	if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

	return api.fetchMyTickets(headers).then(response => {
		console.log("MY_TICKETS: ");
		console.log(response.data);

		if (response.status === 200) {
            dispatch({
				type: 'FETCH_MY_TICKETS',
				myTickets: response.data,
			});

			dispatch({
				type: 'FILTER_OPEN_TICKETS',
			});

			return dispatch({
				type: 'FETCH_FILTERED_TICKETS',
				filters: getState().filters,
				myTickets: response.data,
			});
        }
		
	})
	.catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

      		dispatch({
      			type: "AUTHENTICATION_ERROR", 
      			data: error.response.data
      		});
		}
   
    })         
};

export const fetchUsers = () => (dispatch) => {
	api.fetchUsers().then(users => {
		console.log("USERS: ");
		console.log(users.data);

		dispatch({
			type: 'FETCH_USERS',
			users: users.data,
		});
	})
	.catch(error => {
		console.log(error);
	});
};