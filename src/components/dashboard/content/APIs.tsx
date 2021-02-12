import React from 'react';

const APIs = () => {
    return(
        <div className="apis">
            <div className="section-item">
                <h3>REST APIs</h3>
                <p>This application uses Express.js on the back-end for its REST API endpoints.</p>
                <div className="indent">
                    <p><strong>Users Router</strong></p>
                    <p>The Users Router focuses on registering new users, authenticating users, and logging users out. It consists of 5 endpoints:</p>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /users</strong></p>
                        <p>The request body contains the user information, and password. Data validation is used to determine if the username is already in use. If it is, an error is sent to the client. The password is hashed upon creation using bcryptjs and a JSON Web Token is generated. The user info and generated token is sent to the client.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /users/login</strong></p>
                        <p>The request body contains the user email and password for authentication. Bcryptjs compares the incoming password with the hashed password in the database, if its a match the user is authenticated. Using the user id to query the Tickers, Postings, and Tasks, the models are sent to the client.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /users/logout</strong></p>
                        <p>When a user is authenticated through JWT, the session will be running. The user may terminate the session by logging out and deleting the JWT stored in the database, leaving the user no longer authenticated.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /users/logoutall</strong></p>
                        <p>No feature on the client-side will allow a user to close all sessions but can be run on the back-end if necessary.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /users/me</strong></p>
                        <p>When a user is disconnected momentarily or refreshes the page, the get request is sent to persist the session on the user's browser.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Tickers Router</strong></p>
                    <p>The user must be authenticated for access. Web scraping is utilized to store data from Yahoo Finance and send to users. It consists of 2 endpoints:</p>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /tickers</strong></p>
                        <p>Allows the user to add to his list of stock tickers for intraday prices, and financial news.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /tickers</strong></p>
                        <p>When a user logs in or needs to persist the data.</p>
                    </div>
                </div>        
                <div className="indent">
                    <p><strong>Postings Router</strong></p>
                    <p>The user must be authenticated for access. There are 4 webpages that are web scraped and stored into single list on a database. On Indeed, the keywords pertaining to software developing and web developing roles queried by different cities: Toronto, Edmonton, Calgary, and Vancouver.</p>
                    <div className="indent">
                        <p><strong>Method: get, Path: /postings</strong></p>
                        <p>Allows the user to scrape the data from indeed, store it into the database, and send it to the user for use.</p>
                    </div>
                </div>
                <div className="indent">
                    <p><strong>Tasks Router</strong></p>
                    <p>There are 4 main functions to the Task Manager, or, To-Do List. It is to create new task, get all tasks, complete a task, and delete a task. These are the 4 endpoints:</p>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /tasks</strong></p>
                        <p>Takes user inputs from the client and create a new task into the database.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: GET, Path: /tasks</strong></p>
                        <p>Find all tasks by a specific user, sort by descending and send the list of tasks to the user.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: POST, Path: /tasks/:id</strong></p>
                        <p>Takes a user input of a specific task by id, mark the task as complete and send a newly filtered list to the user.</p>
                    </div>
                    <div className="indent">
                        <p><strong>Method: DELETE, Path: /tasks/:id</strong></p>
                        <p>Takes a user input of specific task by id, and deletes the task from the database and sends a newly filtered list to the user.</p>
                    </div>
                </div>
            </div>
            <div className="section-item">
                <h3>Database Service</h3>
                <p>For the production version, the application uses MongoDB Atlas as its database service. Mongoose is used to verify and validate data entry.</p>
                <div className="indent">
                    <p><strong>Users Model</strong></p>
                    <p>The Users Collection Schema consists of the username, email and password inputted by a user. It also consists of a list of JSON Web Tokens generated per session.</p>
                    <p>The user is authenticated in the user model, and the JSON Web Token is also generated in the user model.</p>
                    <p>To see the documentation of the Users schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-dashboard-app-api/blob/master/src/models/users.js/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Tickers Model</strong></p>
                    <p>The Tickers Collection Schema consists of the user id from the User Model, list of stock tickers and its stock exchange, list of the financial data of the stock tickers, and a list of the financial news pertaining to the list of stock tickers. The financial data and financial news are web scraped from Yahoo Finance.</p>
                    <p>To see the documentation of the Tickers schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-dashboard-app-api/blob/master/src/models/tickers.js/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Postings Model</strong></p>
                    <p>The Postings Collection Schema consists of the user id from the User Model, and a list of job postings web scraped from Indeed.</p>
                    <p>To see the documentation of the Postings schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-dashboard-app-api/blob/master/src/models/postings.js/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
                <div className="indent">
                    <p><strong>Tasks Model</strong></p>
                    <p>The Tasks Collection Schema consists of the user id from the User Model, description of the task, the deadline of the task, and if the task has been completed.</p>
                    <p>To see the documentation of the Tasks schema, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-dashboard-app-api/blob/master/src/models/tasks.js/" target="_blank" rel="noreferrer">LINK HERE.</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default APIs;