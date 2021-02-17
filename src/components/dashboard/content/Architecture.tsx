import React from 'react';
import stack from './images/stack.png';
// import pipeline from './images/pipeline.png';

const Architecture = () => {
    return(
        <div className="architecture">
            <div className="section-item">
                <h3>Application Stack</h3>
                <p>The image below illustrates a high level overview of the application's stack.</p>
                <img className="item-image" src={stack}/>
            </div>
            <div className="section-item">
                <h3>Application Pipeline</h3>
                <p>The image below illustrates a high level overview of the application's pipeline.</p>
                {/* <img className="item-image" src={pipeline}/> */}
            </div>
        </div>
    )
}

export default Architecture;