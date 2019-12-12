import React, { Component } from 'react';
// import data from './contacts.json';
// import logo, { ReactComponent } from '../../src/';
import './MessegeInput.css';


class MessegeInput extends React.Component {
  
  state = {
    userstext: ""
  }

  saveinput = (event) => {
    this.setState({ userstext: event.target.value });
  }

//  savemessege = ()=> {
//  this.props.setmessege(this.state.userstext)
//  }

demoReply = () => {
  this.props.addsms(true, this.state.userstext)
  setTimeout((this.props.addsms) , 3000, false ,this.state.userstext)
}



 render(){
  return (
    <div class='inputWrapper'>
      <input
        class='textinput'
        type='text'
        placeholder='Type your messege here.....'
        value={this.state.userstext}
        onChange={this.saveinput}
      />
       <button class='button' onClick={this.demoReply}>>></button> 
    </div>
        );
    }
}
 

const element = < MessegeInput/ >;

export default MessegeInput;
