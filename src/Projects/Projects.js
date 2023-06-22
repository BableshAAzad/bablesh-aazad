import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import TextForm from './TextEditor/TextForm';
import Alert from './TextEditor/Alert';

export default function Projects(props) {
    const [mode] = useState('light'); //whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    // const toggleMode = (cls) => {
    //     if (mode === 'light') {
    //         setMode('dark');
    //         document.body.style.backgroundColor = '#042743';
    //         showAlert("Dark mode has been enabled", "success");
    //     }
    //     else {
    //         setMode('light');
    //         document.body.style.backgroundColor = 'white';
    //         showAlert("Light mode has been enabled", "success");
    //     }
    // }
    return (
        <>
            <Alert alert={alert} />
            <div className='container my-3'>
                <h3>{props.heading}</h3>
                <TextForm showAlert={showAlert} mode={mode} />
                <button className='btn btn-success textAbout'>
                <Link className='textAboutLink' to='/about'>About of Text-Editor</Link>
                </button>
            </div>
        </>
    )
}
