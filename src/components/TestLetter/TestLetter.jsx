import React from 'react'
import './TestLetter.css'

function TestLetter({testLetterInfo}) {
  return (
    <span className="test-letter">{testLetterInfo.testLetter}</span>
  )
}

export default TestLetter