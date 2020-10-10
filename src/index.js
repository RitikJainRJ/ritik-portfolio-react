import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import App from './components/App';
import SocialProfiles from './components/SocialProfiles';
import './index.css';

ReactDOM.render(
    <Router history = {createBrowserHistory()}>
        <Switch>
            <Route exact path = "/" render = {() => <Header><App /></Header>}/>
            <Route exact path = "/contact" render = {() => <Header><SocialProfiles /></Header>}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);