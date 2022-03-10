import React from 'react';
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';

function ChallengeSection({
    para,
    words,
    character,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo
}) {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-right" className="challenge-challenge-header">
                Take Speed test now!
            </h1>
            <TestContainer
                para={para}
                words={words}
                character={character}
                wpm={wpm}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
            />
        </div>
    );
}

export default ChallengeSection;
