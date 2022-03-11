import React from 'react';
import './TestLetter.css';

function TestLetter({ testLetterInfo }) {
    const { status } = testLetterInfo;

    const statusClass = {
        correct: 'test-letter-correct',
        incorrect: 'test-letter-incorrect',
        notAttempted: 'test-letter-not-attempted',
    }[status];

    return (
        <span className={`test-letter ${statusClass}`}>
            {testLetterInfo.testLetter}
        </span>
    );
}

export default TestLetter;
