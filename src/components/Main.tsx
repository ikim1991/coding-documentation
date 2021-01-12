import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeView } from '../store/actions/ChangeViewActions';

const Main = () => {

    const dispatch = useDispatch();


    return(
        <div className="main">
            <h2>My Projects</h2>
            <div className="navi-links" onClick={() => dispatch(changeView(false))}><Link to="/online-chess">Online Chess</Link></div>
            <div className="navi-links" onClick={() => dispatch(changeView(false))}><Link to="/blackjack">Interactive BlackJack</Link></div>
            <div className="navi-links" onClick={() => dispatch(changeView(false))}><Link to="/dashboard">My Dashboard</Link></div>
            <div className="navi-links" onClick={() => dispatch(changeView(false))}><Link to="/golf-tracker">My Golf Tracker</Link></div>
        </div>
    )
}

export default Main;