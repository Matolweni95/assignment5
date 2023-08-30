import React from 'react';
import '../css/Questionnaire.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Edit from './Edit';
import Editcard from './Editcard';

const Questionnaire = () => {
    return (
        <div>   
            <Navbar />
            <Sidenav>
                <Editcard />
            </Sidenav>    
        </div>
    );
};

export default Questionnaire;
