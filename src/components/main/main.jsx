import React, { Component } from 'react'
import './main.css'
import './form.css'
import Form from "./form";

class Main extends Component {
  render() {
    return (
        <main>
            <section id="about" className="about">
                <h2>About Us</h2>
                <div>
                  <p>We provide a great spectrum of product porfolio for healthcare facilities accross California....</p>
                </div>
            </section>

            <div>
                <div className="services">
                  <div className="service__one">
                  <p className="service__icon"><i class="fa fa-users" aria-hidden="true"></i></p>
                  <p className="service__title">Team</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service_two">
                  <p className="service__icon"><i class="fa fa-shopping-basket" aria-hidden="true"></i></p>
                  <p className="service__title">Products</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service__three">
                  <p className="service__icon"><i class="fa fa-laptop" aria-hidden="true"></i></p>
                  <p className="service__title">Operation</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                </div>
            </div>

            <div id="portofolio" className="gallery">
              <div className="gallery__item__one"></div>
              <div className="gallery__item__two"></div>
              <div className="gallery__item__three"></div>
              <div className="gallery__item__four"></div>
              <div className="gallery__item__five"></div>
              <div className="gallery__item__six"></div>
            </div>

            <section id="vision">
              <h2>Our Vision</h2>
              <div>
                <p>Donec facilisis nunc eros. Mauris nec odio sapien. Nunc ullamcorper interdum erat, et malesuada dolor congue at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Donec ut ultrices lectus. Sed varius sem sit amet sapien vestibulum, dictum aliquam tortor venenatis. Vestibulum tincidunt lacinia euismod. Etiam id ipsum a massa posuere.</p>
              </div>
            </section>

            <section id="contact">
              <h2 className="form__h2">E-mail Us</h2>
              <Form />
            </section>
        </main>
    )
  }
}

export default Main;