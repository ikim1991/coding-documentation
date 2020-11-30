import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Header from './components/Header';
import Chess from './components/online-chess/Chess';

const App = () => {
    return(
        <div className='App'>
            <Switch>
            <Route exact path="/">
                <Header/>
            </Route>
            <Route exact path="/online-chess">
                <Header/>
                <Chess/>
            </Route>
            </Switch>
            
        </div>
    )
};

export default App;