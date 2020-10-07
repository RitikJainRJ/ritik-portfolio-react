import React, { Component } from 'react';
import CODING_PROFILES from '../data/codingProfiles';

class CodingProfile extends Component {
    render(){
        const { image, link } = this.props.codingProfile;

        return(
            <div style = {{ display : 'inline-block', width : 150, margin : 10 }}>
                <a href = {link}><img src = {image} alt = 'cp' style = {{width : 80 , height : 80 }}/></a>
            </div>
        );
    }
}

class CodingProfiles extends Component {
    render(){
        return(
            <div>
                <h2>Coding Profiles</h2>
                {
                    CODING_PROFILES.map(CODING_PROFILE => {
                        return (
                            <CodingProfile key = {CODING_PROFILE.id} codingProfile = {CODING_PROFILE}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default CodingProfiles;