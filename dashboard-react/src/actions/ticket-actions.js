import * as api from '../api';

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