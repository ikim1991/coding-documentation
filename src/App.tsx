import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';
import Chess from './components/online-chess/Chess';
import Blackjack from './components/blackjack/Blackjack';
import Dashboard from './components/dashboard/Dashboard';
import GolfTracker from './components/golf-tracker/GolfTracker';
import Main from './components/Main';

const App = () => {
    return(
        <div className='App'>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Main/>
                </Route>
                <Route exact path="/online-chess">
                    <Chess/>
                </Route>
                <Route exact path="/blackjack">
                    <Blackjack/>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route exact path="/golf-tracker">
                    <GolfTracker/>
                </Route>
            </Switch>
            
        </div>
    )
};

export default App;