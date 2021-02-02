import React from 'react';

const Introduction = () => {
    return(
        <div className="introduction">
            <div className="section-item">
                <h3>Project Summary</h3>
                <p>TEXT</p>
                <p>The application is deployed through GitHub Pages and Heroku. The application can be found in the link below: </p>
                <p><a href="https://ikim1991.github.io/my-dashboard-app/" target="_blank" rel="noreferrer">Deployment</a></p>
                <p>The source code is on GitHub which can be found in the links below: </p>
                <div className="repo">
                <p><a className="repo" href="https://github.com/ikim1991/my-dashboard-app/" target="_blank" rel="noreferrer">Client Side</a></p>
                <p><a className="repo" href="https://github.com/ikim1991/my-dashboard-app-api/" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>The client-side application is built on React using TypeScript. Webpack is used as the module bundler and Sass is used to style the application. For all dependencies, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-dashboard-app/blob/master/package.json/" target="_blank" rel="noreferrer">package.json</a></span> file.</p>
                <p>The server-side application is built on Nodejs using Express. It uses MongoDB as a database service. The server uses REST APIs and WebSockets (using Socket.io) to communicate with the clients. For all dependencies, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/my-dashboard-app-api/blob/master/package.json/" target="_blank" rel="noreferrer">package.json</a></span> file.</p>
                <p>The back-end application is hosted on Heroku using its free-tier plan. This may cause the first request to the server to take a few seconds to load as the app is put to sleep after 30 minutes of inactivity.</p>
            </div>
        </div>
    )
}

export default Introduction;
