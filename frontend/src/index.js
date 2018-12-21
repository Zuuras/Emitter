import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import routes from './routes';
import LoginPage from "./LoginPage";


ReactDOM.render(
    routes,
    document.getElementById('head')
);


//ReactDOM.render(<Header />, document.getElementById('head'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
