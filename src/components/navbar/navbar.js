import React from 'react';
import Style from './style';

const Navbar = ({ logo }) => (
  <Style.Nav>
    <Style.Logo src={logo} alt="Blip" />
  </Style.Nav>
);

export default Navbar;
