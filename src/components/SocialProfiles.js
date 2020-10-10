import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const {link, image, description } = props.socialProfile;

    return(
        <div style = {{ display : 'inline-block', width : 300, margin : 10, marginTop : 40 }}>
            <a href = {link}><img src = {image} alt = 'cu' style = {{width : 80 , height : 80 }}/></a>
            <p>{description}</p>
            <a href = {link}>{link}</a>
        </div>
    );
}

const SocialProfiles = () => {
    return (
        <div>
            <h2>Please feel free to Contact</h2>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => 
                    <SocialProfile key = {SOCIAL_PROFILE.id} socialProfile = {SOCIAL_PROFILE}/>
                )
            }
        </div>
    );
}

export default SocialProfiles;