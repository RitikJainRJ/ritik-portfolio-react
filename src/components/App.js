import React, { Component } from 'react';
import profile from '../assets/profile.jpg';
import Title from './Title';


class App extends Component{
    render(){
        return(
            <div>
                <img src = {profile} className = 'profile' alt = 'profile'/>
                <h1>Hello!</h1>
                <p>My name is Ritik.</p>
                <Title />

            </div>
        );
    }
}

export default App;