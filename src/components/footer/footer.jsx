import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>A2Z ProWide</h3>
        <p><strong>Reach Us</strong> <br /> info@a2zprowide.com</p>
        <ul>
          <li><a href="https://www.facebook.com" id="facebook" target="blank"><i className="fab fa-facebook-square"></i></a></li>
          <li><a href="https://www.twitter.com" id="twitter" target="blank"><i className="fab fa-twitter-square"></i></a></li>
          <li><a href="https://www.instagram.com" id="instagram" target="blank"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;