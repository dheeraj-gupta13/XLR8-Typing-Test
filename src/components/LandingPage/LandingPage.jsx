import React from 'react';
import './LandingPage.css';
import xlr8 from './../../assests/xlr8_3.png';
import Typewriter from 'typewriter-effect';

function LandingPage() {
    return (
        <>
            <div className="landing-container">
                <div data-aos="fade-right" className="landing-left">
                    <h1 className="heading">Can you type...</h1>
                    <div className="heading-two">
                        <Typewriter
                            options={{
                                strings: ['Quick?', 'fast?', 'Accurate?'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>

                <div className="landing-right" data-aos="fade-left">
                    <img src={xlr8} alt="" className="image" />
                </div>
            </div>
        </>
    );
}

export default LandingPage;
