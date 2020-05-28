import React from 'react';
import Style from './style';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => (
  <Style.Nav>
    <Link exact to="/">
      <Style.Logo src={logo} alt="Blip" />
    </Link>
  </Style.Nav>
);

export default Navbar;
