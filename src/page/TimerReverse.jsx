import React, { useState, useEffect } from "react";
const motivationalPhrases = [
        "Ты справишься!",
        "Ты отлично справился!",
        "Не останавливайся!",
        "Ты молодец!",
        "Ты на правильном пути!",
];

function TimerReverse( { onNameSubmit } ) {
    const [name, setName] = useState('');
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    const [finished, setFinished] = useState(false);
    const [phrase, setPhrase] = useState("");

    useEffect(() => {
        let interval = null;
        if(isRunning && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } 
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    useEffect(() => {
        if (seconds === 0 && isRunning) {
            setIsRunning(false);
            setFinished(true);
            const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
            setPhrase(motivationalPhrases[randomIndex]);
        }
    }, [seconds, isRunning]);

      const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onNameSubmit) {
            onNameSubmit(name);
        }
    };

    const handleStart = () => {
        setIsRunning(true);
        setFinished(false);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(10);
        setFinished(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Введите ваше имя
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                    />
                </label>
                <button type="submit">Send</button>
            </form>

            <h1>{name}, осталось {seconds} секунд</h1>

            {finished && (
                <p>{name}, {phrase}</p>
            )}


            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Попробовать ещё раз</button>
        </div>
    );
}

export default TimerReverse;