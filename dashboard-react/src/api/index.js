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
		author: values.assignee,
		assignee: values.assignee,
	};

	return axios({	
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		url: `${ROOT_URL}/dashboard/tickets/`,
		data: data,
	});

	// console.log('CREATE TICKET VALUES IN API:');
	// console.log(values.assignee.id);
	// console.log(values.assignee.email);
	// console.log(values.assignee.name);

	// const stringified_user = qs.stringify({
	// 	email: values.assignee.email,
	// 	id: values.assignee.id,
	// 	name: values.assignee.name,
	// });

	// return axios.post(`${ROOT_URL}/dashboard/tickets/`, {
	// 	title: values.title,
	// 	description: values.description,
	// 	assignee: stringified_user,
	// 	author: stringified_user,
	// });
};

// export const fetchTickets = (connection) => { return connection.json(); };

// export const editTicket = (connection) => {

// };