import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/index.css';

class App extends Component {
  state = { 
    memeLimit: 10,
    text0: 'Actual Programming',
    text1: 'Switching between themes'
  };

  render(){
    const { text0, text1 } = this.state;

    return(
    <div>
      <h1><u>Welcome to Meme Generator!</u></h1>
      <MyMemes />
      <h3>Write Some text</h3>
      <Form inline>
        <FormGroup>
          <ControlLabel>Top</ControlLabel>
          {' '}
          <FormControl
            type = "text"
            onChange = {event => this.setState({ text0: event.target.value })}
            placeholder = "Actual Programming"
          ></FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Bottom</ControlLabel>
            {' '}
          <FormControl
            type = "text"
            onChange = {event => this.setState({ text1: event.target.value })}
            placeholder = "Switching between themes"
          ></FormControl>
        </FormGroup>
      </Form>
      <h4>Click on the Picture</h4>
      {
        this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => 
          <MemeItem 
            key = {index} 
            meme = {meme}
            text0 = {text0}
            text1 = {text1}
          />
        )
      }
      <div 
        className = "meme-button" 
        onClick = {() => {this.setState({ memeLimit: this.state.memeLimit + 10 })}}
      >
        Load 10 more items...
      </div>
    </div>);
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(App);