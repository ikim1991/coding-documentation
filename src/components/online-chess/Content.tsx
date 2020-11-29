import React from 'react';
import data from '../data/sections.json';

const Content = () => {
    return(
        <div className="content">
            {data.sections.map((section, i) => {
                return(
                    <div className="content-section">
                        <div className="section-header">
                            <i className={`fa fa-${section.icon}`}></i>
                            <h2>{section.header}</h2>
                        </div>
                        <p>{section.overview}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Content;