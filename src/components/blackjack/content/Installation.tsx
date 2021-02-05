import React from 'react';

const Installation = () => {
    return(
        <div className="installation">
            <div className="section-item">
                <h3>Getting Started</h3>
                <p>To play this game online or see the production version, check it out at the <span><a className="inline-link" href="https://ikim1991.github.io/interactive-blackjack-app/" target="_blank" rel="noreferrer">LINK HERE</a></span></p>
                <p>To run this app locally, clone or download the repository see the links below:</p>
                <div className="repo">
                    <p><a className="repo" href="https://github.com/ikim1991/interactive-blackjack-app/" target="_blank" rel="noreferrer">Client Side</a></p>
                    <p><a className="repo" href="https://github.com/ikim1991/interactive-blackjack-api/" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>To install this application, Node.js is required.</p>
            </div>
            <div className="section-item">
                <h3>Server Side</h3>
                <p>To start, begin by installing the server side application first. You can clone or download it from the repositroy in the link above.</p>
                <p>Start by running the command <i>npm install</i> to install all required dependencies.</p>
                <p>After all the dependencies have been installed onto the local machine, the server can be started.</p>
                <p>Run the command <i>npm run dev</i>.</p>
                <p>This will create a local development server environment using nodemon. By default, the PORT variable has been set to 3001.</p>
             </div>
            <div className="section-item">
                <h3>Client Side</h3>
                <p>After the server side application is successfully running on the local machine, download or clone the client side from the repository in the link above.</p>
                <p>Start by running the command <i>npm install</i> to install all required dependencies.</p>
                <p>The client side is built using the create-react-app command. The development server is currently running on Port 3001 at http://localhost:3001/. This URL needs to be referenced in 2 files on the client-side application. It is found in the fetch methods in the <span><a className="inline-link" href="https://github.com/ikim1991/interactive-blackjack-app/blob/master/src/actions.js/" target="_blank" rel="noreferrer">actions.js file</a></span> and <span><a className="inline-link" href="https://github.com/ikim1991/interactive-blackjack-app/blob/master/src/components/SignUpForm.js/" target="_blank" rel="noreferrer">SignUpForm.js file</a></span>.</p>
                <p>Next run the command <i>npm start</i>.</p>
                <p>This will build and create the client side application locally using React Scripts.</p>
                <p>The game should now be running locally on http://localhost:3000/.</p>
            </div>
        </div>
    )
}

export default Installation;




