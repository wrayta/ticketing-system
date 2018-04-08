import { combineReducers } from 'redux';
import myTickets from './my-tickets-reducer';
import ticketEditingContainer from './ticket-editing-container-reducer';
import editTicket from './edit-ticket-reducer';

const rootReducer = combineReducers({
  myTickets,
  ticketEditingContainer,
  editTicket,
});

export default rootReducer;
