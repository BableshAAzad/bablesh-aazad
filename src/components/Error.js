import React from 'react';
import { Link } from 'react-router-dom';


function Error() {

        const lalitt = {
            marginTop: "200px",
            marginBottom: "200px",
            textAlign: "center"
        }
        const lalit = {
            color: "red"
        }

    return (
        <>
            <div style={lalitt}>
                <h2 style={lalit}> Sorry :( 404 page not found</h2>
                <br /><br />
                <Link to="/">Go to Home page......</Link>
            </div>
        </>
    )
}

export default Error;