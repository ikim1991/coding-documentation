import React from 'react';

const Introduction = () => {
    return(
        <div className="introduction">
            <div className="section-item">
                <h3>Project Summary</h3>
                <p>After binge watching The Queen's Gambit on Netflix, I decided to build a fully working game of chess on the web.</p>
                <p>The application is deployed through GitHub Pages and Heroku. The application can be found in the link below: </p>
                <p><a href="https://google.ca">Deployment</a></p>
                <p>The source code is on GitHub which can be found in the links below: </p>
                <div className="repo">
                <p><a className="repo" href="https://google.ca" target="_blank" rel="noreferrer">Client Side</a></p>
                    <p><a className="repo" href="https://google.ca" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>The client-side application is built on React using TypeScript. Webpack is used as the module bundler and Sass is used to style the application. For all dependencies, refer to the <span><a className="inline-link" href="https://google.ca" target="_blank" rel="noreferrer">package.json</a></span> file.</p>
                <p>The server-side application is built on Nodejs using Express. It utilizes Mongoose/MongoDB as its database. The server uses REST APIs and WebSockets (using Socket.io) to communicate with the clients. For all dependencies, refer to the <span><a className="inline-link" href="https://google.ca" target="_blank" rel="noreferrer">package.json</a></span> file.</p>
            </div>
        </div>
    )
}

export default Introduction;
