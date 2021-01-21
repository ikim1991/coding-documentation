import React from 'react';
import application from './images/architecture.png';
import pipeline from './images/pipeline.png';

const Architecture = () => {
    return(
        <div className="architecture">
            <div className="section-item">
                <h3>Application Architecture</h3>
                <p>The image below illustrates a high level overview of the application's architecture.</p>
                <img className="item-image" src={application}/>
            </div>
            <div className="section-item">
                <h3>Application Pipeline</h3>
                <p>The image below illustrates a high level overview of the application's pipeline.</p>
                <img className="item-image" src={pipeline}/>
            </div>
        </div>
    )
}

export default Architecture;