import React from 'react'
import './TryAgain.css'

function TryAgain({ words, characters, wpm}) {
  return (
    <>
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <h2>Characters : {characters}</h2>
                    <h2>Words : {words}</h2>
                    <h2>wpm : {wpm}</h2>
                </p>
            </div>

            <div className='button'>
                <button className='end-buttons start-again-btn'>Retry</button>
                <button className="end-buttons share-btn">Share</button>
                <button className="end-buttons share-btn">Tweet</button>
            </div>
        </div>
    </>
  )
}

export default TryAgain