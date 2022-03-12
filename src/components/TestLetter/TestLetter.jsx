import React from 'react';
import './TestLetter.css';

function TestLetter({ testLetterInfo }) {
    const { status } = testLetterInfo;
    const { isNext } = testLetterInfo;

    const statusClass = {
        correct: 'test-letter-correct',
        incorrect: 'test-letter-incorrect',
        notAttempted: 'test-letter-not-attempted',
    }[status];

    const isNextClass = {
        no: 'no',
        yes: 'yes',
    }[isNext];

    return (
        <span className={`test-letter ${statusClass} ${isNextClass}`}>
            {testLetterInfo.testLetter}
        </span>
    );
}

export default TestLetter;
