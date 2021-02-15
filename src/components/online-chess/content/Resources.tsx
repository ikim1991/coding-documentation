import React from 'react';

const Resources = () => {
    return(
        <div className="resources">
            <div className="section-item">
                <h3>Client Side Technologies</h3>
                <p>For a full list of all the dependencies of this application, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/online-chess/blob/main/package.json/" target="_blank" rel="noreferrer">package.json file.</a></span></p>
                <p>Shown below is the list of the key technologies used in developing the Client.</p>
                <div className="indent">
                    <p><strong>Webpack</strong></p>
                    <p>The Client comprises of Webpack's modularity, on-top of React's front-end capabilities. By configuring the <span><a className="inline-link" href="https://github.com/ikim1991/online-chess/blob/main/webpack.config.js/" target="_blank" rel="noreferrer">webpack.config.js</a></span>, the Client is able to compile and bundle the React and JSX components, TypeScript as a language, and Sass as a CSS preprocessor.</p>
                </div>
                <div className="indent">
                    <p><strong>React</strong></p>
                    <p>The front-end application is built on React using UI components. This allows for the development of clean, fast, and scaleable coding.</p>
                </div>
                <div className="indent">
                    <p><strong>Redux/React-Redux</strong></p>
                    <p>A single source of truth state management system that is scaleable and easy to implement on top of the React framework.</p>
                </div>
                <div className="indent">
                    <p><strong>Socket.io Client</strong></p>
                    <p>Provides real-time bi-directional communication between the server and the client, crucial in maintaining a smooth interactive gameplay.</p>
                </div>
            </div>
            <div className="section-item">
                <h3>Server Side Technologies</h3>
                <p>For a full list of all the dependencies of this application, refer to the <span><a className="inline-link" href="https://github.com/ikim1991/online-chess-api/blob/main/package.json/" target="_blank" rel="noreferrer">package.json file.</a></span></p>
                <p>Shown below is the list of the key technologies used in developing the Server.</p>
                <div className="indent">
                    <p><strong>Node.js</strong></p>
                    <p>Node.js provides a great back-end JavaScript runtime environment to run a web server.</p>
                </div>
                <div className="indent">
                    <p><strong>Express</strong></p>
                    <p>A minimal and flexible web application framework for the back-end development of the Server.</p>
                </div>
                <div className="indent">
                    <p><strong>MongoDB</strong></p>
                    <p>A NoSQL, document-oriented database program. MongoDB Atlas is used as a database service in the production version of the application.</p>
                </div>
                <div className="indent">
                    <p><strong>Mongoose</strong></p>
                    <p>An Object Data Modelling library for MongoDB that provides a simple schema-based solution to model the application data with built in data validation.</p>
                </div>
                <div className="indent">
                    <p><strong>Socket.io</strong></p>
                    <p>Provides real-time bi-directional communication between the server and the client, crucial in maintaining a smooth interactive gameplay.</p>
                </div>
            </div>
            <div className="section-item">
                <h3>License</h3>
                <p>The MIT License (MIT)</p>
                <p>Copyright 2020 Chris Kim</p>
                <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
            </div>
        </div>
    )
}

export default Resources;