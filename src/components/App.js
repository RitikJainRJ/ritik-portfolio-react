import React, { Component } from 'react';
import profile from '../assets/profile.jpg';
import Projects from './Projects';
import Title from './Title';
import CodingProfiles from './CodingProfiles';
import '../index.css';


class App extends Component{
    state = { showBio : false }; 

    toggleBio = () => {
        this.setState({ showBio : !this.state.showBio });
    }

    render(){
        const { showBio } = this.state;
        console.log(showBio);
        return(
            <div>
                <img src = {profile} className = 'profile' alt = 'profile'/>
                <h1>Hello!</h1>
                <p>My name is Ritik.</p>
                <Title />
                <p>I am looking for a place where I can utilize my Skills and Knowledge.</p>
                {
                    showBio ? (
                        <div>
                            <p>I am currently living in Delhi.</p>
                            <p>I am pursuing my masters from NSUT (NSIT).</p>
                            <p>I pretty much Code everyday.</p>
                            <p>I love Data structures, Algorithms, Machine Learning and React.</p>
                            <button onClick = {this.toggleBio}>Read Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggleBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <CodingProfiles />
                <hr />
            </div>
        );
    }
}

export default App;