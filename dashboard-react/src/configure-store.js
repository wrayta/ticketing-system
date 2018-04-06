import { createStore, applyMiddleware } from 'redux';
import ticketsReducer from './reducers/tickets-reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const configureStore = () => {
	const middlewares = [thunk];

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}

	return createStore(
		ticketsReducer,
		applyMiddleware(...middlewares)
	);
	
};

export default configureStore;