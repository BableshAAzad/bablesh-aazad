import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Alert from './Alert';
import './TextEditor.css';
import TextForm from './TextForm';

export default function TextEditor(props) {
    const [mode] = useState('light'); //whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        document.title = "Text Editor - Bableshaazad.com";
      }, []);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <>
            <Alert alert={alert} />
            <div className='container my-3'>
                <h3>{props.heading}</h3>
                <TextForm showAlert={showAlert} mode={mode} />
                <button className='btn btn-success textAbout'>
                    <Link className='textAboutLink' to='/projects/text-editor/about'>About of Text-Editor</Link>
                </button>
                <Outlet />
            </div>
        </>
    )
}
