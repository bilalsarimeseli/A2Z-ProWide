import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navigation"><a id="A2Z" href="/">A2Z <span>ProWide</span></a></li>
        </ul>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portofolio">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;