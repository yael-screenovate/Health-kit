import React, { Component } from 'react';
import './Contact.css';
import {connect} from 'react-redux';
import {setCurrent,conversationState} from '../store/actions'

class Contact extends React.Component {

  sendcurrent = () => {
    console.log("8",this.props.contact)
  //  this.props.getCurrent(this.props.contact)
  //  getCurrent={this.props.setCurrent}
   this.props.setCurrent(this.props.contact)
   this.props.conversationState(true)
   console.log("12", this.props)        
   }

  render() {
    return (
      <div >
            <button class="contactWrapper" onClick= {this.sendcurrent} >
              {/* <div style={{background: '#'+ Math.floor(Math.random()*16777215).toString(16)}} class="circle" ></div> */}
              <div style={{backgroundColor: this.props.contact.color}} class="circle" ></div> 
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

// const mapStateToProps = state => ({
//  contacts: state.viewReducer.contacts,
//  conversations: state.conversationReducer.conversations,
//  show: state.viewReducer.show,
//  currentcontact: state.contactsReducer.currentcontact
// })
export default connect(null, {setCurrent, conversationState} )(Contact);

