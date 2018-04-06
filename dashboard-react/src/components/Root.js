import React from 'react';
import { Provider } from 'react-redux';
import DashboardApp from './DashboardApp';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Root = ({ store }) => (
	<Provider store={store}>
		<DashboardApp />
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;