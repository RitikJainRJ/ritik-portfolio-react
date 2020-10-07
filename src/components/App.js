import React, { Component } from 'react';
import profile from '../assets/profile.jpg';

class App extends Component{
    render(){
        return(
            <div>
                <img src = {profile} className = 'profile' alt = "none"/>
                <h1>Hello!</h1>
                <p>My name is Ritik.</p>
            </div>
        );
    }
}

export default App;