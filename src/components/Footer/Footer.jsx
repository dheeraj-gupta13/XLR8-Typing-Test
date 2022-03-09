import React from 'react';
import './Footer.css';
import github from './../../assests/gh.png';
import linkedin from './../../assests/li.png';
import web from './../../assests/web.png';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="social-media-icons">

                    <a
                        href="https://github.com/Dheeraj13042002/"
                        className="github"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} alt="" className='social-media' />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dheeraj-gupta-8861461bb/"
                        className="linkedin social-media"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="" className='social-media' />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dheeraj-gupta-8861461bb/"
                        className="portfolio social-media"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={web} alt="" className='social-media' />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;
