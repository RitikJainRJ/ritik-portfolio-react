import React, { Component } from 'react';

const TITLES = [
    'doing Masters in Computer Science.',
    'an enthusiastic learner.',
    'a Self Motivated Person.',
    'always Productive.'
];

class Title extends Component {
    state = { titleIndex : 0, fadeIn : true};

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 3000);
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
    
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 3000);
        }, 6000);
    }

    render(){
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        );
    }
}

export default Title;