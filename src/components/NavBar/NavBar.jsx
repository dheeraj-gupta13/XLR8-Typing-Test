import React from 'react';
import './NavBar.css';
import thunder from './../../assests/thunder-yellow.png';

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src={thunder} alt="" className="thunder" />
                    <h1 className="logo-name">Accelerate</h1>
                </div>
                <div className="login-button-container">
                    <button
                        className="login-button"
                        type="button"
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
