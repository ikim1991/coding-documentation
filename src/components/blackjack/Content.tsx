import React from 'react';
import { useDispatch } from 'react-redux';
import { changeView, highlightSection } from '../../store/actions/ChangeViewActions';
import data from '../data/sections.json';

const Content = () => {

    const dispatch = useDispatch();

    const navigateView = (e:React.MouseEvent<HTMLElement>) => {
        dispatch(changeView(true));
        dispatch(highlightSection(e.currentTarget.id));
    }

    return(
        <div className="content">
            {data.sections.map((section, i) => {
                return(
                    <div id={section.header.toLowerCase()} className="content-section" onClick={navigateView} key={i}>
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