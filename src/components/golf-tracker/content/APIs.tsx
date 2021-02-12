import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints.</p>
                <div className="indent">
                    <p><strong>Router</strong></p>
                    <p>The app Router handles all read and write operations to the database. These include retrieving golf data by seasons, adding new golf courses, and logging new rounds.</p>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /</strong></p>
                        <p>Grabs all of the user's golf data to be displayed in the Client. The data is filtered by the most recent season of the user.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /season</strong></p>
                        <p>The user has the ability to toggle the data based on an input of the season the user is interested in viewing.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /newcourse</strong></p>
                        <p>A user has the ability to create and add a new course into the database. Once the course is created, the user is able to create new instances of the scorecard.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /newround</strong></p>
                        <p>If the course already exists in the database, the user is able to select it and create a new instance of the scorecard to log a new round of golf.</p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Database Service</h3>
                <p>For the production version, the application uses MongoDB Atlas as its database service. Mongoose is used to verify and validate data entry.</p>
                <div className="indent">
                    <p><strong>Users Model</strong></p>
                    <p>As this is a personal app, there are no features of logging in or registering a new user.</p>
                    <p>The Users Collection Schema consists of the username, and list the golf data of the different seasons the user has played and logged.</p>
                    <p>The logic for calculating the user's handicap, lowest, average, highest, number of total rounds played, and number of courses played are handled in the Users Model.</p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/src/models/users.js" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Courses Model</strong></p>
                    <p>The Courses Collection Schema consists of the course name, total number of holes for the course, hole details, the par, course rating, and the slope.</p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/src/models/courses.js" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Rounds Model</strong></p>
                    <p>The Rounds Collection Schema consists of the date of the round, the season, the course, the holes played, the score per hole, the par per hole, total score of the round, the score differential, and the handicap differential.</p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/src/models/rounds.js" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default APIs;