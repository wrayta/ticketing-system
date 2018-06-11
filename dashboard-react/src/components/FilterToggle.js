import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class FilterToggle extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {
	//         isGoing: true,
	//         numberOfGuests: 2
	//     };

	//     this.handleInputChange = this.handleInputChange.bind(this);
	// }

	handleInputChange = (event) => {
		const { filterOpenTickets, filterClosedTickets, filterTicketsByTitle, applyFilters } = this.props;

		const target = event.target;   

		// history.push('/dashboard/');

		switch(target.name) {
			case "filter_status_check_open":
				console.log("OPEN");
				console.log(target.checked);
				filterOpenTickets();				
				break;
			case "filter_status_check_closed":
				console.log("CLOSED");
				console.log(target.checked);
				filterClosedTickets();
				break;
			case "filter_title_text":
				filterTicketsByTitle(target.value);
				break;
			default:
				console.log("NOTHING");
		}

		applyFilters();

		// let filteredTickets = _.filter(tickets, ticket => ticket.status.includes(target.value));

	}

	render() {

		return (
			<div>
				<h3>Filter:</h3>
				<tbody>	
					<tr>
					Status:<br/>
						<td>
							OPEN<input type="checkbox" defaultChecked="true" onChange={this.handleInputChange} name="filter_status_check_open" value="OPEN" />
						</td>
						<td>
							CLOSED<input type="checkbox" onChange={this.handleInputChange} name="filter_status_check_closed" value="CLOSED" />
						</td>
					</tr>
					<tr>
					Title:<br/>
						<td>
							<input type="text" onChange={this.handleInputChange} name="filter_title_text" />
						</td>
					</tr>
					<tr>
						<td>
							<input type="button" name="filter_clear_button" value="Clear" />
						</td>
					</tr>
				</tbody>
			</div>
		);
	}
}

FilterToggle = connect(
    null,
    actions
)(FilterToggle);

export default FilterToggle;