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
                  <p>AZ provider aims to take care of its customers unique needs. We provide customizable services in residential programs, senior housing, private residences, and hospitals. We have large portfolio of products that meets our customer’s variety of needs such as clothing, footwear, beauty supplies or personal care products. </p>
                </div>
            </section>

            <div>
                <div className="services">
                  <div className="service__one">
                  <p className="service__icon"><i class="fa fa-users" aria-hidden="true"></i></p>
                  <p className="service__title">Career Support</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service_two">
                  <p className="service__icon"><i class="fa fa-shopping-basket" aria-hidden="true"></i></p>
                  <p className="service__title">Our products</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service__three">
                  <p className="service__icon"><i class="fa fa-laptop" aria-hidden="true"></i></p>
                  <p className="service__title">Operation</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                </div>

                <div className="services">
                  <div className="service__four">
                  <p className="service__icon"><i class="fa fa-users" aria-hidden="true"></i></p>
                  <p className="service__title">Payeeship</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service_five">
                  <p className="service__icon"><i class="fa fa-shopping-basket" aria-hidden="true"></i></p>
                  <p className="service__title">SSI/SSDI Medical Benefits</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service__six">
                  <p className="service__icon"><i class="fa fa-laptop" aria-hidden="true"></i></p>
                  <p className="service__title">Immigration</p>
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

            <section id="visison">
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