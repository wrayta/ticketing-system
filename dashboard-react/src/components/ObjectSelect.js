import React, { Component } from 'react';

class ObjectSelect extends Component {
    render() {
        const { input, options, user, value, ...rest } = this.props;
        console.log("options: " + options);
        const parse = event => {
            // This is what redux-form will hold:
            return JSON.parse(event.target.value);
        }
        return (
            <select
                value={input.value ? JSON.stringify(input.value) : JSON.stringify(user)}
                onBlur={event => input.onBlur(parse(event))}
                onChange={event => input.onChange(parse(event))}
            {...rest}>
                {options.map(option =>
                    <option key={option.id} value={JSON.stringify(option)} >{option.name}</option>
                )}
            </select>
        );
    }
}    

export default ObjectSelect;