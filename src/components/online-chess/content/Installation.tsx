import React from 'react';

const Installation = () => {
    return(
        <div className="installation">
            <div className="section-item">
                <h3>Getting Started</h3>
                <p>To play this game online or see the production version, check it out at the <span><a className="inline-link" href="https://ikim1991.github.io/online-chess/" target="_blank" rel="noreferrer">LINK HERE</a></span></p>
                <p>The game is multiplayer and requires 2 to play. As this is a test project, there will probably not be any users on the servers to play against. If you wish to test the funtionality of the app, you may do so by opening up the web page on two different tabs and playing against yourself.</p>
                <p>To run this app locally, clone or download the repository see the links below:</p>
                <div className="repo">
                    <p><a className="repo" href="https://github.com/ikim1991/online-chess/" target="_blank" rel="noreferrer">Client Side</a></p>
                    <p><a className="repo" href="https://github.com/ikim1991/online-chess-api/" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>To install this application, Node.js is required.</p>
            </div>
            <div className="section-item">
                <h3>Server Side</h3>
                <p>To start, begin by installing the server side application first. You can clone or download from the repository in the link above.</p>
                <p>Before running the server locally, the environment variables need to be set up. First create a file named dev.env. Here the url to the MongoDB database needs to be created under the environment variable name MONGODB_URL. This can be either a local MongoDB environment or a Database Service such as MongoDB Atlas. The default value for the PORT variable is 3001.</p>
                <p>Next run the script <i>npm run dev</i>.</p>
                <p>This will create a local development server environment using nodemon. With the local web server environment running, the next step will require the client side application.</p>
            </div>
            <div className="section-item">
                <h3>Client Side</h3>
                <p>After the server side application is successfully running on the local machine, move onto the client side. You can clone or download from the repository in the link above.</p>
                <p>The client side is built on the React Library and bundled using Webpack. To introduce environment variables, they must be injected using plugins. This can be done in the <span><a className="inline-link" href="https://github.com/ikim1991/online-chess/blob/main/webpack.config.js/" target="_blank" rel="noreferrer">webpack.config.js</a></span> file.</p>
                <p>The only environment variable required on the client side application is the url to the server side application. In this case it would be the locally running development server running on PORT 3001 at http://localhost:3001/</p>
                <p>Next run the script <i>npm start</i>.</p>
                <p>This will build and create the client side application locally using Webpack's devServer plugin.</p>
                <p>The game should now be running locally on http://localhost:3000/</p>
            </div>
        </div>
    )
}

export default Installation;




