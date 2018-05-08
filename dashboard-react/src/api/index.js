import React from 'react';
import axios from 'axios';
import qs from 'qs';

const ROOT_URL = 'http://127.0.0.1:8000';

export const fetchTickets = () => {
	return axios.get(`${ROOT_URL}/dashboard/tickets/`);
};

export const fetchUsers = () => {
	return axios.get(`${ROOT_URL}/dashboard/users/`);
};

export const updateTicket = (values) => {
	return axios.put(`${ROOT_URL}/dashboard/tickets/${values.id}/`, values);
};

export const createTicket = (values) => {
	
	const data = {
		title: values.title,
		description: values.description,
		author: values.assignee.id,
		assignee: values.assignee.id,
	};

	return axios.post(`${ROOT_URL}/dashboard/tickets/`, data);

	// ({	
	// 	method: 'post',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	url: `${ROOT_URL}/dashboard/tickets/`,
	// 	data: data,
	// });
};