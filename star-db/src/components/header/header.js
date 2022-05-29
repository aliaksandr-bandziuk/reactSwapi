import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {

  const setActive = ({isActive}) => isActive ? 'active-link' : '';

  return(
    <div className='header d-flex'>
      <h3>
        <NavLink to='/' className={setActive}>
          Star DB
        </NavLink>
      </h3>
      <ul className='d-flex'>
        <li>
          <NavLink to='/people'>People</NavLink>
        </li>
        <li>
          <NavLink to='/details'>Details</NavLink>
        </li>
        <li>
          <NavLink to='/notes'>Star Notes</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header;