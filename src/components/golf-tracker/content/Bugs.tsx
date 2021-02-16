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
                <p>When a User is not found in the database, an Error Status of 404 will be the result.</p>
                <p>Currently there is one application-breaking bug found. In the process of logging a new round, the user is prompted a dropdown menu and a date picker, if the user does not specify a dropdown menu selection and proceeds to press the Show Course button, the application crashes as it tries to handle the null value. This will be fixed on the next update.</p>
            </div>
            <div className="section-item">
                <h3>Features</h3>
                <p>There are a few features missing from the application. The production version has been deployed and these missing features will be added in an update in the future.</p>
                <p>The application is currently not supported on mobile and tablets. Although it implements responsive design, it is recommended to not use this application below the minimum screen resolution width of 1024px.</p>
                <p>A 16:9 aspect ratio for screen resolution is recommended.</p>
            </div>
        </div>
    )
}

export default Bugs;