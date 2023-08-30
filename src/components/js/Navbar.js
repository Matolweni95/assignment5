import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Signout from './Signout';

const Navbar = () => {
    return (
        <div className='app'>
            <nav className="navbar" >
                <div className="nav-container">
                <Link exact to="/" className="nav-logo">
                    QZ
                    <i className="fa fa-code"></i>
                </Link>
                <ul className= "nav-menu nav-menu">
                    <Signout />
                </ul>
                <div className="nav-icon">
                    <i className="fa fa-bars"></i>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
