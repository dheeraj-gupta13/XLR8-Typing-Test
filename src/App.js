import './App.css';
import { useState, useEffect, React } from 'react';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';

import { SAMPLE_PARAGRAPHS } from './para/data';

const TotalTime = 60;

const dataArray = SAMPLE_PARAGRAPHS;
console.log(SAMPLE_PARAGRAPHS);

function App() {
    const [para, setPara] = useState('Loading...');
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(TotalTime);
    const [words, setWords] = useState(0);
    const [character, setCharacter] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [testInfo, setTestInfo] = useState([]);

    const fetchNewPara = () => {
        // fetch(serviceUrl)
        //     .then((response) => response.text())
        //     .then((data) => {
        let idx = Math.floor(Math.random() * 10);
        const paraArray = dataArray[idx].split('');

        const testInfoTemp = paraArray.map((letter) => {
            return {
                testLetter: letter,
                status: 'notAttempted',
                isNext: 'no',
            };
        });

        setTestInfo(testInfoTemp);
        setPara(dataArray[idx]);
        // setTimerStarted(false);
        // });
    };

    useEffect(() => {
        fetchNewPara();
    }, []);

    // renders -> either change in timeRemaining, or timeStarted
    useEffect(() => {
        console.log(timeRemaining);
        if (!timerStarted) return;

        let IntervalId = null;
        setTimerStarted(true); // set time started as true

        if (timeRemaining > 0) {
            IntervalId = setInterval(() => {
                const timeSpend = TotalTime - timeRemaining;
                const wpm = timeSpend > 0 ? (words / timeSpend) * TotalTime : 0;
                setTimeRemaining((timeRemaining) => timeRemaining - 1);
                setWpm(Math.round(wpm));
            }, 1000);
        } else {
            clearInterval(IntervalId);
        }

        return () => clearInterval(IntervalId);
    }, [timeRemaining, timerStarted]);

    // called when input is given.
    const handleInputChange = (inputValue) => {
        if (timerStarted === false) {
            // User started typing, Start the timer.
            setTimerStarted(true);
        }

        const character = inputValue.length;
        const words = inputValue.split(' ').length;
        const index = character - 1;

        for (let idx = index + 1; idx < para.length; idx++) {
            testInfo[idx].status = 'notAttempted';
        }

        // underflow case, when user had typed nothing
        if (index < 0) {
            const testInfoTemp = [
                {
                    testLetter: testInfo[0].testLetter,
                    status: 'notAttempted',
                },
                ...testInfo.slice(1),
            ];

            for (var idx = 0; idx < para.length; idx++) {
                testInfoTemp[idx].isNext = 'no';
            }

            setTestInfo(testInfoTemp);
            setCharacter(character);
            setWords(words);

            return;
        }

        // overflow case, when user typed all the given paragraph
        if (index >= para.length) {
            setCharacter(character);
            setWords(words);
            return;
        }

        // Handle the backspace
        const testInfoTemp = testInfo;

        if (!(index === para.length - 1)) {
            testInfoTemp[index + 1].status = 'notAttempted';
            for (let idx = 0; idx < para.length; idx++) {
                testInfoTemp[idx].isNext = 'no';
            }
            testInfoTemp[index + 1].isNext = 'yes';
        }

        const isCorrect = inputValue[index] === testInfo[index].testLetter;
        testInfoTemp[index].status = isCorrect ? 'correct' : 'incorrect';

        setTestInfo(testInfo);
        setCharacter(character);
        setWords(words);
    };

    const startAgain = () => {
        setTimerStarted(false);
        fetchNewPara();

        setTimeRemaining(TotalTime);
        setCharacter(0);
        setWords(0);
        setWpm(0);
    };

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
                    onInputChange={handleInputChange}
                    startAgain={startAgain}
                />
                <Footer />
            </div>
        </>
    );
}

export default App;
