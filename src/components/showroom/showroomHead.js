import React, { Component } from 'react';
import NavShowroom from './NavShowroom';
import './showroomHead.css';

class ShowroomHeader extends Component {
    render() {
        return (
            <header id="showroomHeader">
                <NavShowroom/>
                <div className="top">
                    <h1>Welcome to our showroom</h1>
                </div>
            </header>
        )
    }
}

export default ShowroomHeader;