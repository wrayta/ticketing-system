import * as api from '../api';

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