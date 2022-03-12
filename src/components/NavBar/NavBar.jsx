import React from 'react';
import './NavBar.css';
import thunder from './../../assests/thunder-yellow.png';

import {useNavigate }from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const handelClick = () => {
        navigate("/auth");
    };
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src={thunder} alt="" className="thunder" />
                    <h1 className="logo-name">XLR8</h1>
                </div>
                <div className="login-button-container">
                    <button
                        className="login-button"
                        onClick={handelClick}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
