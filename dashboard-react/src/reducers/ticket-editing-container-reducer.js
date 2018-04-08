const ticketEditingContainer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_SHOWING':
			console.log('TOGGLE_SHOWING');
			return action.isShowing;
		default:
			return state;
	}

	// this.setState({
	// 		isHidden: !this.state.isHidden
	// 	});

};

export const getIsShowing = (state) => state.ticketEditingContainer;

export default ticketEditingContainer;