import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints.</p>
                <div className="indent">
                    <p><strong>Method: POST, Endpoint: /signin</strong></p>
                    <p>Takes the username, passoword, and server input values from the user and is sent to the server as the request body. The username and password is validated against the data existing on the back-end. If authenticated, the user data is sent back to the client. Password is stored as a string value on the back-end. Although this is not good practice, it was done as a quick solution on a personal project. It is recommended that an encryption library such as bcrypt is used if a password must be stored.</p>
                </div>
                <div className="indent">
                    <p><strong>Method: POST, Endpoint: /signup</strong></p>
                    <p>Takes the username and password input values from the user and is sent to the server as the request body in JSON. The server verifies that the username is not already in use and creates a new user on the back-end.</p>
                </div>        
            </div>
        </div>
    )
}

export default APIs;