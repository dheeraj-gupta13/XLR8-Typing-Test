import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';

const TotalTime = 60;

function App() {
    const [para, setPara] = useState('Hello World');
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(TotalTime);
    const [words, setWords] = useState(0);
    const [character, setCharacter] = useState(0);
    const [wpm, setWpm] = useState(0);

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
                />
                <Footer />
            </div>
        </>
    );
}

export default App;
