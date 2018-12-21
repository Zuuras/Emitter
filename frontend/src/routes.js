import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom';

import Header from './Header';
import LoginPage from './LoginPage';

export default (
    <Router>
        <Switch>
            <Route exact path="/" component={Header}></Route>
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    </Router>
);