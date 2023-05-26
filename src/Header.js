import React from 'react';
import Nav from './Nav';
import logo from './logo.png';

function Header() {
    return (
    <header>
      <img src={logo} alt="Logo"/>
      <Nav />
    </header>
   );
}
export default Header




