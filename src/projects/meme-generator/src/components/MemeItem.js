import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component {
  state = { hovered: false };

  postMeme = () => {
    const { text0, text1, meme } = this.props;
    if(text0 && text1){
      const memeObj = {
        template_id: meme.id,
        text0,
        text1
      };
      this.props.createMeme(memeObj);
    }
  }

  render(){
    const { url, name } = this.props.meme;
    const { hovered } = this.state;

    return(
      <div className = 'meme-item' onClick = {this.postMeme}>
        <img 
          src = {url}
          alt = {name}
          className = {hovered ? "meme-img darken-img" : "meme-img"}
          onMouseEnter = {() => {this.setState({ hovered : true })}}
          onMouseLeave = {() => {this.setState({ hovered : false})}}
        />
        <p className = {hovered ? "meme-txt" : "no-txt"}>{name}</p>
      </div>
    );
  }
}

export default connect(null, { createMeme })(MemeItem);