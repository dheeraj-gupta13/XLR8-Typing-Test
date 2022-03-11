import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

function TypingChallenge({
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) {
    return (
        <>
            <div className="typing-speed-container">
                <div className="timer-container">
                    <div className="timer">
                        00:
                        {timeRemaining >= 10
                            ? timeRemaining
                            : `0${timeRemaining}`}
                    </div>
                </div>

                {!timerStarted && (
                    <div className="timer-info">Start typing now!</div>
                )}
            </div>

            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="textarea test-paragraph">
                        {testInfo.map((characterObj, index) => {
                            return (
                                <TestLetter
                                    key={index}
                                    testLetterInfo={characterObj}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea text-area-typeHere"
                        placeholder="Start Typing Here..."
                    ></textarea>
                </div>
            </div>
        </>
    );
}

export default TypingChallenge;
