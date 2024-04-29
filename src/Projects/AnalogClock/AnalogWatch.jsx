import React, { useState, useEffect } from 'react';
import "./AnalogWatch.css";

function AnalogWatch() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = 30 * hours + minutes / 2;
    const minuteRotation = 6 * minutes;
    const secondRotation = 6 * seconds;

    return (
        <div id="clockMainDiv">
            <div id="clockContainer">
                <div id="hour" style={{ transform: `rotate(${hourRotation}deg)` }}></div>
                <div id="minute" style={{ transform: `rotate(${minuteRotation}deg)` }}></div>
                <div id="second" style={{ transform: `rotate(${secondRotation}deg)` }}></div>
            </div>
            <div className='text-center mt-3'>
                <h4>For JavaScript Source code : <i className="fa-solid fa-hand-point-down"></i></h4>
                <a className='text-decoration-none' href="https://github.com/BableshAAzad/Project_Collection/tree/main/AnalogClockHtmlCssJs" target="_blank" rel="noopener noreferrer">Click here for source code in JavaSrcipt</a>
            </div>
        </div>
    );
}

export default AnalogWatch;
