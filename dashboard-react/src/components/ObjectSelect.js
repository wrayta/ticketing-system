import React, { Component } from 'react';

class ObjectSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
          // input: JSON.stringify(this.props.user),
          input: null,
        };
    }

    handleChange = e => {

        const { changeAssignee, id } = this.props;

        const val = e.target.value;

        this.setState({
            input: JSON.parse(val)
        }, () => {changeAssignee(id, JSON.parse(val));});

        

        // console.log("STATE INPUT");
        // console.log(this.state.input);

        
    }

    render() {
        const { options, user } = this.props;
        return (
            <select
                value={this.state.input ? JSON.stringify(this.state.input) : JSON.stringify(user)}
                onChange={this.handleChange}
            >
                {options.map(option =>
                    <option key={option.id} value={JSON.stringify(option)} >{option.name}</option>
                )}
            </select>
        );
    }
}    

export default ObjectSelect;