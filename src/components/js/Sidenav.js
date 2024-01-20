import React from 'react';
import '../css/Sidenav.css'
import img from '../assets/sushi.png';
import { Link } from 'react-router-dom';


const Sidenav = (props) => {
    const { username } = props;
   
    return (
        <div className='navi'>
        <nav id="sidebar">
        <ul className="list-unstyled components">
            <div className='user-container'>
                <img className='avatar' src={img} alt='avatar'/>
                <h1>{username}</h1>
                <h3>online</h3>
            </div>
            <li className="active">
                
                <ul className=" list-unstyled" id="homeSubmenu">
                    <Link to = "/dashboard">
                        Dashboard
                    </Link>
                    <Link to = "/questionnaire" >
                        My Questionnaires
                    </Link>
                    <Link to = "/create">
                        Create Questionnaire
                    </Link>
                    <Link to = "/analytics">
                        Analytics
                    </Link>
                </ul>
            </li>
        </ul> 

        </nav>
        <div className='content'>
            { props.children }
        </div>
        </div>
    
    );
};

export default Sidenav;


