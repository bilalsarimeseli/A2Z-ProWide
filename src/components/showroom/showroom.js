import React, { Component } from "react";
import "./showroom.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button/button";



class Showroom extends Component {
    render() {
        return (
            <main>
                <Header />
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
                            {/* // id="showroomButton"
                // variant="warning"
                // as="input"
                // name="submit"
                // type="submit"
                // value="Showrooms" */}

                            <Button/>
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
                <Footer />
            </main>
        );
    }
}

export default Showroom;
