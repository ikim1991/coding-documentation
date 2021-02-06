import React from 'react';

const Bugs = () => {
    return(
        <div className="bugs">
            <div className="section-item">
                <h3>Testing</h3>
                <p>No testing frameworks have been implemented for this application.</p>
                <p>A functionality test was done by the developer of this application and no reportable bugs have been found.</p>
                <p>To report any bugs or changes, please feel free to contribute through GitHub.</p>
            </div>
            <div className="section-item">
                <h3>Errors & Bugs</h3>
                <p>This application uses try and catch blocks to handle simple errors on the back-end. Any API Errors will result in a Error Status 500.</p>
                <p>If two players in the same room share the same username, an error is returned. The joiner will be notified to change their username if they wish to join the room.</p>
                <p>No game breaking bugs have been reported to this date.</p>
            </div>
            <div className="section-item">
                <h3>Missing Functionality</h3>
                <p>There are a few features missing from the application. The production version has been deployed and these missing features will be added in an update in the future.</p>
                <p>There is no way for the players to communicate with one another. Whether it is in the lobby or during the game, the players are not able to interact. An interactive real-time chat messenger will be added in an update in the future.</p>
                <p>There is no logic available for verifying and validating the states of CHECK or CHECKMATE. The winning player must capture the opponent's King manually for the game to end. A logic that automates and notifies the states of being CHECKED or CHECKMATED will be added in an update in the future.</p>
                <p>The application is currently not supported on mobile and tablets. Although it implements responsive design, it is recommended to not use this application below the minimum screen resolution width of 1024px.</p>
                <p>A 16:9 aspect ratio for screen resolution is recommended.</p>
            </div>
        </div>
    )
}

export default Bugs;