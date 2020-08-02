import React, { Component } from "react";
import "./main.css";
import "./form.css";
import Form from "./form";
import Button from "react-bootstrap/Button";

class Main extends Component {
  render() {
    return (
      <main>
        <section id="about" className="about">
          <h2>About Us</h2>
          <div>
            <p>
              AZ provider aims to take care of its customers unique needs. We
              provide customizable services in residential programs, senior
              housing, private residences, and hospitals. We have large
              portfolio of products that meets our customer’s variety of needs
              such as clothing, footwear, beauty supplies or personal care
              products.{" "}
            </p>
          </div>
        </section>

        <div>
          <div className="services">
            <div className="service__one">
              <p className="service__icon">
                <i className="fa fa-users" aria-hidden="true" />
              </p>
              <p className="service__title">Career Support</p>
              <p>
                Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed
                mi risus, congue in nunc sed, bibendum porta nibh. Praesent.
              </p>
            </div>
            <div className="service_two">
              <p className="service__icon">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
              </p>
              <p className="service__title">Products</p>
              <p>Click to visit our showrooms</p>
              <Button
                id="showroomButton"
                variant="warning"
                as="input"
                name="submit"
                type="submit"
                value="Showrooms"
                onClick={this.submitForm}
              />
            </div>
            <div className="service__three">
              <p className="service__icon">
                <i className="fa fa-laptop" aria-hidden="true" />
              </p>
              <p className="service__title">Operation</p>
              <p>
                Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed
                mi risus, congue in nunc sed, bibendum porta nibh. Praesent.
              </p>
            </div>
          </div>

          <div className="services">
            <div className="service__four">
              <p className="service__icon">
                <i className="fa fa-credit-card" aria-hidden="true" />
              </p>
              <p className="service__title">Payeeship</p>
              <p>
                Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed
                mi risus, congue in nunc sed, bibendum porta nibh. Praesent.
              </p>
            </div>
            <div className="service_five">
              <p className="service__icon">
                <i className="fa fa-medkit" aria-hidden="true" />
              </p>
              <p className="service__title">SSI/SSDI Medical Benefits</p>
              <p>
                We provide case initiation and case management services in
                connecting you with social security benefits and medical
                insurance benefits. Simply complete the application and submit
                it here..
              </p>
            </div>
            <div className="service__six">
              <p className="service__icon">
                <i className="fa fa-location-arrow" aria-hidden="true" />
              </p>
              <p className="service__title">Immigration</p>
              <p>
                Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed
                mi risus, congue in nunc sed, bibendum porta nibh. Praesent.
              </p>
            </div>
          </div>
        </div>

        <div id="portofolio" className="gallery">
          <div className="gallery__item__one" />
          <div className="gallery__item__two" />
          <div className="gallery__item__three" />
          <div className="gallery__item__four" />
          <div className="gallery__item__five" />
          <div className="gallery__item__six" />
        </div>

        <section id="vision">
          <h2>Our Vision</h2>
          <div>
            <p>
              Donec facilisis nunc eros. Mauris nec odio sapien. Nunc
              ullamcorper interdum erat, et malesuada dolor congue at. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Donec ut ultrices lectus. Sed varius sem sit amet sapien
              vestibulum, dictum aliquam tortor venenatis. Vestibulum tincidunt
              lacinia euismod. Etiam id ipsum a massa posuere.
            </p>
          </div>
        </section>

        <section id="contact">
          <h2 className="form__h2">E-mail Us</h2>
          <Form />
        </section>
      </main>
    );
  }
}

export default Main;
