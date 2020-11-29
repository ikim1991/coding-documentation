import React from 'react';
import './assets/styles/App.scss';
import Header from './components/Header';
import Chess from './components/online-chess/Chess';

const App = () => {
    return(
        <div className='App'>
            <Header/>
            <Chess/>
        </div>
    )
};

export default App;