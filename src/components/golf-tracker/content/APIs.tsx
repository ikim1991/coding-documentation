import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints.</p>
                <div className="indent">
                    <p><strong>Router</strong></p>
                    <p>The app Router handles all read and write operations to the database. These include retrieving your data by the season, adding new golf courses, and logging new rounds.</p>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /</strong></p>
                        <p></p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /season</strong></p>
                        <p></p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /newcourse</strong></p>
                        <p></p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /newround</strong></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Database Service</h3>
                <p>For the production version, the application uses MongoDB Atlas as its database service. Mongoose is used to verify and validate data entry.</p>
                <div className="indent">
                    <p><strong>Users Model</strong></p>
                    <p></p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/src/models/users.js" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Courses Model</strong></p>
                    <p></p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/src/models/courses.js" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Rounds Model</strong></p>
                    <p></p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-golf-tracker-api/blob/master/src/models/rounds.js" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default APIs;