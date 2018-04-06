import React from 'react';

export const connectToDatabase = () => {
	try {
	    return fetch('http://127.0.0.1:8000/dashboard/tickets/');
	} catch (e) {
	    console.log('FAILED TO CONNECT TO DB: ' + e);
	}

};

export const fetchTickets = (connection) => { return connection.json(); };