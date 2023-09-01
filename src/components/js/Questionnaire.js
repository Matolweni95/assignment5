import React from 'react';
import '../css/Questionnaire.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

import Editcard from './Editcard';
const userData = localStorage.getItem('userData');
const user = JSON.parse(userData);
const username = user.username;

const Questionnaire = () => {
    return (
        <div>   
            <Navbar />
            <Sidenav username={username}>
                <Editcard />
            </Sidenav>    
        </div>
    );
};

export default Questionnaire;
