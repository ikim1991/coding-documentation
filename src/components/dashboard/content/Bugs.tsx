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
                <p>When an invalid search or request is made to the database, an Error Status 404 will be the result.</p>
                <p>A middleware function uses JSON Web Tokens as a means of authenticating the user. When the user fails to authenticate in the middleware, a Error Status of 401 will be the result.</p>
                <p>This application deals with data collection through web scraping. Any changes in the HTML and CSS design of the third party websites may cause errors and inconsistencies in the data.</p>
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