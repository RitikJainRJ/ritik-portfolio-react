import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import App from './components/App';
import SocialProfiles from './components/SocialProfiles';
import MusicMaster from './projects/music-master/src';
import './index.css';

ReactDOM.render(
    <Router history = {createBrowserHistory()}>
        <Switch>
            <Route exact path = "/" render = {() => <Header><App /></Header>}/>
            <Route path = "/contact" render = {() => <Header><SocialProfiles /></Header>}/>
            <Route path = "/music-master" render = {() => <Header><MusicMaster /></Header>}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);