import React, { Component } from 'react';
import './MessegeInput.css';
import {saveSingleSms, demoReply} from '../store/actions'
import {connect} from 'react-redux';

class MessegeInput extends React.Component {
  
  // state = {
  //   userstext: ""
  // }

  saveinput = (event) => {
   // this.setState({ userstext: event.target.value });
   this.props.saveSingleSms(event.target.value)
  }

// demoReply = () => {
//   this.props.addsms(true, this.state.userstext)
//   setTimeout((this.props.addsms) , 1500, false ,this.state.userstext)
//   this.setState({userstext: ""})
// }

handleKeyPress = (e) => {
  if (e.key === 'Enter') 
    this.props.demoReply()
  }


 render(){
   console.log("97", this.props.userstext)
  return (
    <div class='inputWrapper'>
      <input
        class='textinput'
        type='text'
        placeholder="Type your messege here....."
        value={this.props.userstext}
        onChange={this.saveinput}
        onKeyPress={this.handleKeyPress}
      />
       <button class='button' onClick={this.props.demoReply}>>></button> 
    </div>
        );
    }
}

const element = < MessegeInput/ >;

const mapStateToProps = state => ({
  userstext: state.conversationReducer.userstext
})

export default connect(mapStateToProps, {saveSingleSms, demoReply} )(MessegeInput);
  

