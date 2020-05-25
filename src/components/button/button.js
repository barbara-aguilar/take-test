import React from 'react';
import Style from './style';

const Button = (props) => {
  return <Style.Button>{props.children}</Style.Button>;
};

export default Button;
