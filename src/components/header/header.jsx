import React, { Component } from 'react';
import Nav from './nav';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav/>
          <div className="top">
              <h1>Caring<br/>your needs</h1>
          </div>
      </header>
    )
  }
}

export default Header;