import React, { Component } from "react";
import "./showroom.css";
import ShowroomHeader from "../showroom/showroomHead";
import Footer from "../footer/footer";



class Showroom extends Component {
    render() {
        return (
            <main>
                <ShowroomHeader />
                <div>
                    <div className="services">
                        <div className="service__one">
                            <p className="service__icon">
                                <i className="fa fa-mars" aria-hidden="true" />
                            </p>
                            <p className="service__title">MEN</p>
                            <p>
                                Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed
                                mi risus, congue in nunc sed, bibendum porta nibh. Praesent.
              </p>
                        </div>
                        <div className="service_two">
                            <p className="service__icon">
                                <i className="fa fa-venus" aria-hidden="true" />
                            </p>
                            <p className="service__title">WOMEN</p>
                            <p>Click to visit our showrooms</p>
                            {/* // id="showroomButton"
                // variant="warning"
                // as="input"
                // name="submit"
                // type="submit"
                // value="Showrooms" */}

                        </div>
                        <div className="service__three">
                            <p className="service__icon">
                                <i className="fa fa-laptop" aria-hidden="true" />
                            </p>
                            <p className="service__title">#######</p>
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
