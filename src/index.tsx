import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Store from './store/store';

ReactDOM.render(
    <HashRouter>
        <Provider store={Store}>
            <App/>
        </Provider>
        
    </HashRouter>,
    document.getElementById('root')
);