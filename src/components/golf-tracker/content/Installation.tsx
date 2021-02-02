import React from 'react';

const Installation = () => {
    return(
        <div className="installation">
            <div className="section-item">
                <h3>Getting Started</h3>
                <p>To see the production version, check it out at the <span><a className="inline-link" href="https://ikim1991.github.io/my-golf-tracker/" target="_blank" rel="noreferrer">LINK HERE</a></span></p>
                <p>To run this app locally, clone or download the repository see the links below:</p>
                <div className="repo">
                    <p><a className="repo" href="https://github.com/ikim1991/my-golf-tracker/" target="_blank" rel="noreferrer">Client Side</a></p>
                    <p><a className="repo" href="https://github.com/ikim1991/my-golf-tracker-api/" target="_blank" rel="noreferrer">Server Side</a></p>
                </div>
                <p>To install this application, Node.js is required.</p>
            </div>
            <div className="section-item">
                <h3>Server Side</h3>
                <p>TEXT</p>
            </div>
            <div className="section-item">
                <h3>Client Side</h3>
                <p>TEXT</p>
            </div>
        </div>
    )
}

export default Installation;




