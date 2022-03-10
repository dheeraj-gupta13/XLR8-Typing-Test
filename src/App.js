import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';

const TotalTime = 60;

const serviceUrl = 'http://metaphorpsum.com/paragraphs/1/9';

function App() {
    const [para, setPara] = useState('Loading...');
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(TotalTime);
    const [words, setWords] = useState(0);
    const [character, setCharacter] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [testInfo, setTestInfo] = useState([]);

    useEffect(() => {
        fetch(serviceUrl)
            .then((response) => response.text())
            .then((data) => {
                setPara(data);
            });

        const paraArray = para.split('');
        const testInfoTemp = paraArray.map((letter) => {
            return {
                testLetter: letter,
                status: 'notAttempted',
            };
        });

        setTestInfo(testInfoTemp);
    }, []);

    return (
        <>
            <div className="app">
                <NavBar />
                <LandingPage />
                <ChallengeSection
                    para={para}
                    words={words}
                    character={character}
                    wpm={wpm}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    testInfo={testInfo}
                />
                <Footer />
            </div>
        </>
    );
}

export default App;
