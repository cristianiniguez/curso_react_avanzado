import React from 'react';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

import { Nav, Link } from './styles';

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHome />
      </Link>
      <Link to='/favs'>
        <MdFavoriteBorder />
      </Link>
      <Link to='/user'>
        <MdPersonOutline />
      </Link>
    </Nav>
  );
};
