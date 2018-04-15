import React from 'react';
import axios from 'axios';

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

// export const fetchTickets = (connection) => { return connection.json(); };

// export const editTicket = (connection) => {

// };