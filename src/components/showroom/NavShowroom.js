import React, { Component } from 'react';
import './NavShowroom.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navigation">A2Z <span>ProWide</span></li>
        </ul>
        <ul>
          <li><a href="#women">Women's Showroom</a></li>
          <li><a href="#men">Men's Showroom</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;