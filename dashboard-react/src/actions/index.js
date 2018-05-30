import * as api from '../api';

export const fetchMyTickets = () => (dispatch, getState) => {

	let headers = {"Content-Type": "application/json"};

	let {token} = getState().authentication;

	if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

	return api.fetchMyTickets(headers).then(response => {
		console.log("MY_TICKETS: ");
		console.log(response.data);

		if (response.status === 200) {
          return dispatch({
				type: 'FETCH_MY_TICKETS',
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
			return dispatch({
				type: 'EDIT_TICKET',
				ticket: response.data,
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
		          return dispatch({
						type: 'FETCH_MY_TICKETS',
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