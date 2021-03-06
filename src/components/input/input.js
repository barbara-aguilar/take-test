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
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default Input;
