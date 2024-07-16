import logo from './images/logo.svg';
import React from 'react';

export default function Header(){
    return(
      <header>
          <nav className='nav'>
            <img className='image' src={logo}  alt='logo'/>
            <ul className='Nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }

  