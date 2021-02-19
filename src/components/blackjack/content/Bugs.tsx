import React from 'react';

const Bugs = () => {
    return(
        <div className="bugs">
            <div className="section-item">
                <h3>Testing</h3>
                <p>No testing frameworks have been implemented for this application.</p>
                <p>A functionality test was done by the developer of this application.</p>
                <p>To report any bugs or changes, please feel free to contribute through GitHub.</p>
            </div>
            <div className="section-item">
                <h3>Errors & Bugs</h3>
                <p>This application uses try and catch blocks to handle simple errors on the back-end. Any API Errors will result in a Error Status 500.</p>
                <p>Error Code 400 is rendered when a username is already in existence upon registering or an invalid username or password is entered during log in.</p>
                <p>There are no game breaking bugs yet to be found. Currently 2 bugs have been found and have not been fixed.</p>
                <div className="indent">
                    <p>1. After Logging In and joining a server, pressing the Back Key to navigate to the home screen fails to log out the user. The user will still be rendered logged in on the back-end.</p>
                    <p>2. During the betting phase, the dealer will count down to let the players know how much time is left before the hands will be dealt. Pressing the Exit key during the best may cause the counter to get out of sync.</p>
                </div>
            </div>
            <div className="section-item">
                <h3>Missing Features</h3>
                <p>There are a few features missing from the application. The production version has been deployed and these missing features will be added in an update in the future.</p>
                <p>The application is currently not supported on mobile and tablets. Although it implements responsive design, it is recommended to not use this application below the minimum screen resolution width of 1024px.</p>
                <p>A 16:9 aspect ratio for screen resolution is recommended.</p>
            </div>
        </div>
    )
}

export default Bugs;