import React from 'react';

const Installation = () => {
    return(
        <div className="installation">
            <div className="section-item">
                <h3>Getting Started</h3>
                <p>To see the production version, check it out at the <span><a className="inline-link" href="https://ikim1991.github.io/my-dashboard-app/" target="_blank" rel="noreferrer">LINK HERE</a></span></p>
                <p>To run this app locally, clone or download the repository see the links below:</p>
                <div className="repo">
                    <p><a className="repo" href="https://github.com/ikim1991/my-dashboard-app/" target="_blank" rel="noreferrer">Client Side</a></p>
                    <p><a className="repo" href="https://github.com/ikim1991/my-dashboard-app-api/" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>To install this application, Node.js is required.</p>
            </div>
            <div className="section-item">
                <h3>Server Side</h3>
                <p>To start, begin by installing the server side application first. You can clone or download it from the repositroy in the link above.</p>
                <p>Start by running the command <i>npm install</i> to install all required dependencies.</p>
                <p>After all the dependencies have been installed onto the local machine, the server can be started.</p>
                <p>Before running the server locally, the environment variables need to be executed. This is done by the env-cmd library.</p>
                <p>First create a file named dev.env. Here the url to the MongoDB database needs to be created under the environment variable name MONGODB_URL. This can be either a local MongoDB environment or a Database Service such as MongoDB Atlas. Next, the environment variable of JWT_SECRET need to be set. This value is needed for authenticating the users via JSON Web Tokens and should not be shared. The default value for the PORT variable is 3001.</p>
                <p>Next run the command <i>npm run dev</i>.</p>
                <p>This will create a local development server environment using nodemon. With the local web server environment running, the next step will require the client side application.</p>
            </div>
            <div className="section-item">
                <h3>Client Side</h3>
                <p>After the server side application is successfully running on the local machine, download or clone the client side from the repository in the link above.</p>
                <p>Start by running the command <i>npm install</i> to install all required dependencies.</p>
                <p>The client side is built using the create-react-app command. The development server is currently running on Port 3001 at http://localhost:3001/. This URL is referenced in the application through an environment variable. Using React's environment variables, first create a file named <i>.env</i>. In the env file create the environment variable REACT_APP_BACKEND_URL and give it the value of http://localhost:3001/.</p>
                <p>Next run the command <i>npm start</i>.</p>
                <p>This will build and create the client side application locally using React Scripts.</p>
                <p>The dashboard should now be running locally on http://localhost:3000/.</p>
            </div>
        </div>
    )
}

export default Installation;




