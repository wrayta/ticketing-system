import { combineReducers } from 'redux';
import myTickets from './my-tickets-reducer';
import ticketEditingContainer from './ticket-editing-container-reducer';
import editTicket from './edit-ticket-reducer';
import { reducer as formReducer } from 'redux-form';
import users from './users-reducer';

const rootReducer = combineReducers({
  myTickets,
  ticketEditingContainer,
  editTicket,
  users,
  form: formReducer
});

export default rootReducer;
