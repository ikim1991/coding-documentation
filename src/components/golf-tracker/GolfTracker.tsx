import React, { Fragment } from 'react';
import Title from './Title';
import Content from './Content';
import Main from './Main';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Header from '../Header';

const GolfTracker = () => {

    const { view } = useSelector((state: AppState) => state.changeView)

    return(
        <Fragment>
            <Header/>
            {(view) ? (
                <Main/>
                ) : (
                <Fragment>
                    <Title/>
                    <Content/>
                </Fragment>
                )}
        </Fragment>
    )
}

export default GolfTracker;