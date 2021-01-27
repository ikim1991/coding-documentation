import React from 'react';

const Resources = () => {
    return(
        <div className="resources">
            <div className="section-item">
                <h3>Client Side Libraries</h3>
                <div className="indent">
                    <p><strong>React - ^17.0.1</strong></p>
                    <p>The front-end application is built on React using UI components. This allows for the development of clean, fast, and scaleable coding.</p>
                </div>
                <div className="indent">
                    <p><strong>Redux - ^3.6.0 / React-Redux - ^7.1.11</strong></p>
                    <p>A single source of truth state management system that is scaleable and easy to implement on top of the React framework.</p>
                </div>
                <div className="indent">
                    <p><strong>Socket.io Client - ^1.4.34</strong></p>
                    <p>Provides real-time bi-directional communication between the server and the client, crucial in maintaining a smooth interactive gameplay.</p>
                </div>
            </div>
            <div className="section-item">
                <h3>Server Side Libraries</h3>
                <div className="indent">
                    <p><strong>Express - ^4.17.1</strong></p>
                    <p>A minimal and flexible web application framework for the back-end development of the application.</p>
                </div>
                <div className="indent">
                    <p><strong>Mongoose - ^5.11.1</strong></p>
                    <p>An Object Data Modelling library for MongoDB that provides a simple schema-based solution to model the application data with built in data validation.</p>
                </div>
                <div className="indent">
                    <p><strong>Socket.io - ^3.0.3</strong></p>
                    <p>Provides real-time bi-directional communication between the server and the client, crucial in maintaining a smooth interactive gameplay.</p>
                </div>
            </div>
        </div>
    )
}

export default Resources;