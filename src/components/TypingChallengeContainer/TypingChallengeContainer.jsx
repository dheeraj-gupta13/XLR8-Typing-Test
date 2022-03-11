import React from 'react';
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

function TypingChallengeContainer({
    para,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) {
    return (
        <>
            <div className="typing-challenge-container">
                <div className="details-section">
                    <ChallengeDetailsCard
                        cardName={'Words'}
                        cardValue={words}
                    />
                    <ChallengeDetailsCard
                        cardName={'Characters'}
                        cardValue={characters}
                    />
                    <ChallengeDetailsCard 
                        cardName={'Speed'} 
                        cardValue={wpm} 
                    />
                </div>

                <div className="typing-playground">
                    <TypingChallenge
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        selectedParagraph={para}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                    />
                </div>
            </div>
        </>
    );
}

export default TypingChallengeContainer;
