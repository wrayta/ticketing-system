import React, { Component } from 'react';

class ObjectSelect extends Component {
  render() {
    const { input, multiple, options, value, ...rest } = this.props;
    console.log("options: " + options);
    const parse = event => {
      // This is what redux-form will hold:
      return JSON.parse(event.target.value);
    }
    return (
      <select
        onBlur={event => input.onBlur(parse(event))}
        onChange={event => input.onChange(parse(event))}
        {...rest}>
        {options.map(option =>
          <option key={option.id} value={JSON.stringify(option)} selected={input.value.id == option.id}>{option.full_name}</option>)}
      </select>
    );
  }
}

export default ObjectSelect;