import React from 'react';
import axios from 'axios';
import qs from 'qs';

const API_URL = 'http://127.0.0.1:8000/api';
const ROOT_URL = 'http://127.0.0.1:3000';

export const fetchMyTickets = () => {
	return axios.get(`${API_URL}/tickets/`);
};

export const fetchTicket = (id) => {
	return axios.get(`${API_URL}/tickets/${id}/`);
};

export const fetchUsers = () => {
	return axios.get(`${API_URL}/users/`);
};

export const updateTicket = (values) => {
	
	const data = {
		...values,
		author: values.author.id,
		assignee: values.assignee.id,
	};

	return axios.put(`${API_URL}/tickets/${values.id}/`, data);
};

export const createTicket = (values) => {
	
	const data = {
		...values,
		author: values.assignee.id,
		assignee: values.assignee.id,
	};

	return axios.post(`${API_URL}/tickets/`, data);
};

export const createUser = (values) => {

	axios.post(`${API_URL}/users/`, {...values, is_active: false});
};