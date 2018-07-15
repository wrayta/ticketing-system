import { combineReducers } from 'redux';
import myTickets from './my-tickets-reducer';
// import ticketEditingContainer from './ticket-editing-container-reducer';
import editTicket from './edit-ticket-reducer';
import users from './users-reducer';
import authentication from './authentication-reducer';
import ticketStatus from './ticket-status-reducer';
import filters from './filters-reducer';
import myFilteredTickets from './filtered-tickets-reducer';
import editForm from './edit-form-reducer';
import createForm from './create-form-reducer';
import loginForm from './login-form-reducer';
import registerForm from './register-form-reducer';

const rootReducer = combineReducers({
  myTickets,
  // ticketEditingContainer,
  editTicket,
  users,
  authentication,
  ticketStatus,
  filters,
  myFilteredTickets,
  editForm,
  createForm,
  loginForm,
  registerForm,
});

export default rootReducer;
