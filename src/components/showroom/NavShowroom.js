import React, { Component } from 'react';
import './NavShowroom.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
        <li className="navigation"><a id="A2Z" href="/">A2Z <span>ProWide</span></a></li>
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