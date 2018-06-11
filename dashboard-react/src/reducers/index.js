import { combineReducers } from 'redux';
import myTickets from './my-tickets-reducer';
// import ticketEditingContainer from './ticket-editing-container-reducer';
import editTicket from './edit-ticket-reducer';
import { reducer as formReducer } from 'redux-form';
import users from './users-reducer';
import authentication from './authentication-reducer';
import ticketStatus from './ticket-status-reducer';
import filters from './filters-reducer';
import myFilteredTickets from './filtered-tickets-reducer';

const rootReducer = combineReducers({
  myTickets,
  // ticketEditingContainer,
  editTicket,
  users,
  authentication,
  ticketStatus,
  filters,
  myFilteredTickets,
  form: formReducer
});

export default rootReducer;
