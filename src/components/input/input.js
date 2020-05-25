import React, { Component } from 'react';
import Style from './style';

class Input extends Component {
  constructor(props) {
    super(props);
    this.value = '';
  }
  getValue = () => {
    return this.value;
  };

  render() {
    return (
      <>
        <Style.Input
          onChange={this.handleChange}
          onBlur={this.handleChange}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
      </>
    );
  }
}

export default Input;
