import * as api from '../api';

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

export const editTicket = (id) => (dispatch, getState) => {

	// TODO: Make API call and query DB for ticket to edit (since modified_date is set in django back-end)
	let headers = {"Content-Type": "application/json"};
    let {token} = getState().authentication;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

	return api.fetchMyTicketToEdit(headers, id).then(response => {
		if (response.status === 200) {
			dispatch({
				type: 'EDIT_TICKET',
				ticket: response.data,
			});
			return dispatch({
				type: 'EDIT_FORM_INITIAL_STATE',
				values: response.data,
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

export const handleCreateFormFieldUpdate = (formFieldId, value) => (dispatch, getState) => {
	switch (formFieldId) {
		case 'title':
			dispatch({
				type: 'UPDATE_CREATE_TITLE',
				values: value
			});
			break;
		case 'description':
			dispatch({
				type: 'UPDATE_CREATE_DESCRIPTION',
				values: value
			});
			break;
		case 'assignee':
			dispatch({
				type: 'UPDATE_CREATE_ASSIGNEE',
				values: value
			});
			break;
	}
};

export const handleEditFormFieldUpdate = (formFieldId, value) => (dispatch, getState) => {
	console.log(value);

	switch (formFieldId) {
		case 'title':
			dispatch({
				type: 'UPDATE_EDIT_TITLE',
				values: value
			});
			break;

		case 'description':
			dispatch({
				type: 'UPDATE_EDIT_DESCRIPTION',
				values: value
			});
			break;

		case 'open_status':
			dispatch({
				type: 'UPDATE_EDIT_OPEN_STATUS',
				values: value
			});
			break;

		case 'closed_status':
			dispatch({
				type: 'UPDATE_EDIT_CLOSED_STATUS',
				values: value
			});
			break;

		case 'assignee':
			dispatch({
				type: 'UPDATE_EDIT_ASSIGNEE',
				values: value
			});
			break;

		default:
			break;
	}

};

export const updateTicket = (values) => (dispatch, getState) => {
	console.log(values);

	let headers = {"Content-Type": "application/json"};
    let {token} = getState().authentication;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

	return api.updateTicket(headers, values).then(response => {
		console.log(response);
		console.log(response.data);
		if (response.status === 200) {
            dispatch({
				type: 'TICKET_SUCCESSFULLY_EDITED',
				data: response.data,
			});
            return api.fetchMyTickets(headers).then(response => {

				if (response.status === 200) {
		            dispatch({
						type: 'FETCH_MY_TICKETS',
						myTickets: response.data,
					});

			  //       dispatch({
					// 	type: 'FILTER_OPEN_TICKETS',
					// });

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
        }
		
	})
	.catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

      		dispatch({
      			type: "TICKET_EDIT_FAILED", 
      			data: error.response.data
      		});
		}
   
    }) 
};

export const deleteTicket = (id) => (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let {token} = getState().authentication;

    if (token) {
        headers["Authorization"] = `Token ${token}`;
    }

    // let noteId = getState().notes[index].id;

    return api.deleteTicket(headers, id).then(response => {
        if (response.status === 204) {
            dispatch({
            	type: 'TICKET_SUCCESSFULLY_DELETED', 
            	id
            });
        
	        return api.fetchMyTickets(headers).then(response => {

				if (response.status === 200) {
		            dispatch({
						type: 'FETCH_MY_TICKETS',
						myTickets: response.data,
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
		} 

    })
    .catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

      		dispatch({
      			type: "TICKET_DELETION_FAILED", 
      			data: error.response.data
      		});
		}
   
    }) 
}

export const createTicket = (values) => (dispatch, getState) => {

	let headers = {"Content-Type": "application/json"};
    let {token} = getState().authentication;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    console.log(JSON.stringify(values));

	return api.createTicket(headers, values).then(response => {
		if (response.status === 201) {
			return dispatch({
				type: 'TICKET_SUCCESSFULLY_CREATED',
				data: response.data,
			});
        } 
		     
	})
	.catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

      		dispatch({
      			type: "TICKET_CREATION_FAILED", 
      			data: error.response.data
      		});
		}
   
    }) 
};

// export const loginUser = (values) => (dispatch) => {
// 	console.log("LOGIN_USER");
// 	api.loginUser(values);
// };

// export const createUser = (values) => (dispatch) => {
// 	console.log("CREATE_USER");
// 	api.createUser(values);
// };

export const loadUser = () => (dispatch, getState) => {
    dispatch({
    	type: "USER_LOADING"
    });

    const token = getState().authentication.token;

    let headers = {
      	"Content-Type": "application/json",
    };

    if (token) {
      	headers["Authorization"] = `Token ${token}`;
    }

    console.log('headers: ' + JSON.stringify(headers))
    
	return api.getAuthenticatedUser(headers)
	.then(res => {
		
    	if (res.status === 200) {
      		dispatch({
      			type: 'USER_LOADED', 
      			user: res.data 
      		});
      		dispatch({
            	type: 'CREATE_FORM_INITIAL_STATE',
            	values: res.data
            });
      		return res.data;
    	} 
    })
    .catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

	        if (error.response.status >= 400 && error.response.status < 500) {
	      		dispatch({
	      			type: "AUTHENTICATION_ERROR", 
	      			data: error.response.data
	      		});
      		}
		}
   
    })   
};

export const login = (values) => (dispatch) => {
    // let headers = {"Content-Type": "application/json"};
    // let body = JSON.stringify({email, password});

    return api.login(values)
    .then(res => {
        if (res.status === 200) {
            dispatch({
            	type: 'LOGIN_SUCCESSFUL', 
            	data: res.data 
            });
            return res.data;
        } 
    })
    .catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

	        if (error.response.status === 403 || error.response.status === 401) {
	      		dispatch({
	      			type: "AUTHENTICATION_ERROR", 
	      			data: error.response.data
	      		});
      		} else {
      			dispatch({
      				type: "LOGIN_FAILED", 
      				data: error.response.data});
      		}
		}
   
    })   
};

export const register = (values) => (dispatch) => {
	return api.register(values)
    .then(res => {
        if (res.status === 200) {
            dispatch({
            	type: 'REGISTRATION_SUCCESSFUL', 
            	data: res.data 
            });
            return res.data;
        }
    })

    .catch (error => {
		if(error.response) {
  			console.log(error.response.data);
	        console.log(error.response.status);
	        console.log(error.response.headers);

	        if (error.response.status === 403 || error.response.status === 401) {
	      		dispatch({
	      			type: "AUTHENTICATION_ERROR", 
	      			data: error.response.data
	      		});
      		} else {
      			dispatch({
      				type: "REGISTRATION_FAILED", 
      				data: error.response.data
      			});
      		}
		}
   
    })   
};

export const logout = () => (dispatch, getState) => {
    // let headers = {"Content-Type": "application/json"};
    const token = getState().authentication.token;

    let headers = {
      	"Content-Type": "application/json",
    };

    if (token) {
      	headers["Authorization"] = `Token ${token}`;
    }

    return api.logout(headers)
    .then(res => {
        if (res.status === 204) {
            dispatch({
            	type: 'LOGOUT_SUCCESSFUL'
            });
            return res.data;
        }
   })
   .catch(error => {
   		if(error.response) {
	        if (error.response.status === 403 || error.response.status === 401) {
	            dispatch({
	            	type: "AUTHENTICATION_ERROR", 
	            	data: error.response.data
	            });
	        }
    	}
    })   
}

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