import React, { Component } from 'react';
// import data from './contacts.json';
// import logo, { ReactComponent } from '../../src/';
import './Contact.css';

class Contact extends React.Component {
  
  sendcurrent = () => {
   this.props.getCurrent(this.props.contact)
   this.props.show(true)
  }


  

  render(){
   
    // const {contact, getCurrent} =this.props;
 
    return (
      <div >
            <button class="contactWrapper" onClick= {this.sendcurrent} >
              <div style={{background: '#'+ Math.floor(Math.random()*16777215).toString(16)}} class="circle" ></div>
              <div class="textWrapper" > 
                <h5 class="name">{this.props.contact.name}</h5>
                <p class="recentSms">{this.props.contact.name}</p>
              </div>
            </button>
      </div>
    )
  }
  
   
    
  }





 const element = < Contact/ >;

export default Contact;
