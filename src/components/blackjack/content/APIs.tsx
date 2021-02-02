import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints.</p>
                <div className="indent">
                    <p><strong>Method: , Endpoint: </strong></p>
                    <p>REST API</p>
                </div>
                <div className="indent">
                    <p><strong>Method: , Endpoint: </strong></p>
                    <p>REST API</p>
                </div>        
                <div className="indent">
                    <p><strong>Method: , Endpoint: </strong></p>
                    <p>REST API</p>
                </div>
            </div>
            <div className="section-item">
                <h3>Websockets</h3>
                <p>Websockets are used for real-time and interactivity of the game play. The Socket.io library is used in this application. The event emitters listed below flows in order of what happens during a game.</p>
                <div className="indent">
                    <p><strong>Event: , Emitter: </strong></p>
                    <p>Socket Event</p>
                </div>
            </div>
        </div>
    )
}

export default APIs;