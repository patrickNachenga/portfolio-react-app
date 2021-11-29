import React from 'react'
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} className='logo' /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "rgb(216, 126, 9)" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">how work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
