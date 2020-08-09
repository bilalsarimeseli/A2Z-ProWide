import React, { Component } from "react";
import "./main.css";
import "./form.css";
import Form from "./form";
import Btn from "../button/button";
import { Button } from "react-bootstrap";

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
            <div className="service_one">
              <p className="service__icon">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
              </p>
              <p className="service__title">Products</p>
              <p className="servicestext">Click to visit our showrooms</p>

              <Btn />
            </div>
            <div className="service__two">
              <p className="service__icon">
                <i className="fa fa-location-arrow" aria-hidden="true" />
              </p>
              <p className="service__title">Immigration</p>
              <p className="servicestext">
                Providing basic immigration guidance services such as assistance
                in green card and citizenship application and connecting clients
                with appropriate authorities and legal law firms and guiding
                clients towards definite legal path. Immigration services
                includes assisting basic immigration applications, green card,
                citizenship, and obtaining employment authorization card.
              </p>
            </div>
            <div className="service_three">
              <p className="service__icon">
                <i className="fa fa-medkit" aria-hidden="true" />
              </p>
              <p className="service__title">SSI/SSDI Medical Benefits</p>
              <p className="servicestext">
                We provide case initiation and case management services in
                connecting you with social security benefits and medical
                insurance benefits. Simply complete the application and submit
                it here..
              </p>
            </div>
            <div id="service_four" className="service__four">
              <p className="service__icon">
                <i className="fa fa-credit-card" aria-hidden="true" />
              </p>
              <p className="service__title">Payeeship</p>
              <p className="servicestext">
                We offer an assistance in managing your money, and spend down
                for your over resourced funds. Whether you get Social Security,
                SSI or SSDI and other form of government benefits, we have an
                expertise in ways to utilize your funds for your best interest.
                In addition to money management, we provide consultation,
                educational one-on-one meetings, and virtual workshops. Simply
                complete the application.
                <Button
                  variant="success"
                  id="DownloadButton"
                  name="Form Download"
                  type="submit"
                  value="Form Download"
                >
                  <a href='https://www.google.com' target="blank">Form Download</a>
                </Button>{" "}
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
