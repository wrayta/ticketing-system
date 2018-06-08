import React from 'react';
import axios from 'axios';
import qs from 'qs';

const API_URL = 'http://127.0.0.1:8000/api';
const ROOT_URL = 'http://127.0.0.1:3000';

// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

// axios.defaults.withCredentials = true;


export const fetchMyTickets = (headers) => {

	return axios({
		method: 'get',
		url: `${API_URL}/tickets/`,
		headers: headers
	});

	// return axios.get(`${API_URL}/tickets/`);
};

export const fetchMyTicketToEdit = (headers, id) => {

	return axios({
		method: 'get',
		url: `${API_URL}/tickets/${id}/`,
		headers: headers
	});
	// return axios.get(`${API_URL}/tickets/${id}/`);
};

export const fetchUsers = () => {
	return axios.get(`${API_URL}/users/`);
};

export const updateTicket = (headers, values) => {
	
	const data = {
		...values,
		assignee: values.assignee.id,
	};

	return axios({
		method: 'put',
		url: `${API_URL}/tickets/${values.id}/`,
		headers: headers,
		data: data
	});

	// return axios.put(`${API_URL}/tickets/${values.id}/`, data);
};

export const deleteTicket = (headers, id) => {
	return axios({
		method: 'delete',
		url: `${API_URL}/tickets/${id}/`,
		headers: headers,
	});
};

export const createTicket = (headers, values) => {
	
	const data = {
		...values,
		assignee: values.assignee.id,
	};

	return axios({
		method: 'post',
		url: `${API_URL}/tickets/`,
		headers: headers,
		data: data
	});

	// return axios.post(`${API_URL}/tickets/`, data);
};

// export const createUser = (values) => {

// 	axios.post(`${API_URL}/users/`, {...values, is_active: false});
// };

// export const loginUser = (values) => {
// 	axios.post(`${API_URL}/login/`, values);
// };

export const getAuthenticatedUser = (headers) => {
	return axios({
		method: 'get',
		url: `${API_URL}/auth/user/`,
		headers: headers
	});

	// return axios.get(`${API_URL}/auth/user/`, {
	// 	headers: headers
	// })
};

export const login = (values) => {
	// return axios({
	// 	method: 'post',
	// 	url: `${API_URL}/auth/login/`,
	// 	// headers: headers,
	// 	data: values
	// });

	return axios.post(`${API_URL}/auth/login/`, values);
};

export const register = (values) => {
	return axios.post(`${API_URL}/auth/register/`, {...values, is_active: false});
};

export const logout = (headers) => {
	return axios.post(`${API_URL}/auth/logout/`, {body: "", headers: headers});
};