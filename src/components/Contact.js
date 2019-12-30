import React, { Component } from 'react';
import './Contact.css';
import {connect} from 'react-redux';
import {setCurrent,conversationState} from '../store/actions'

class Contact extends React.Component {

  sendcurrent = () => {
  //  this.props.getCurrent(this.props.contact)
  //  getCurrent={this.props.setCurrent}
   this.props.setCurrent(this.props.contact)
   this.props.conversationState(true)
   }

   
   getinitials = () => {
    var initials = this.props.contact.name.split(' ').map(function(word){return word[0]}).join('').slice(0,2);       
    return initials
  }

  render() {
    return (
      <div >
            <button class="contactWrapper" onClick= {this.sendcurrent} >
            <div style={{backgroundColor: this.props.contact.color}} class="circle" > {this.getinitials()}</div> 
              <div class="textWrapper" > 
              <h5 class="name">{this.props.contact.name}</h5>
              <p class="recentSms">{this.props.recentsms}</p>
            </div>
            </button>
      </div>
    )
  }   
}

 const element = < Contact/ >;
 
export default connect(null, {setCurrent, conversationState} )(Contact);

