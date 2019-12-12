import React, { Component } from 'react';
// import data from './contacts.json';
// import logo, { ReactComponent } from '../../src/';
import './Messege.css';

class messege extends React.Component{
  
  state = {
    hidden : "",
  }

  componentWillMount () {
    var that = this;
  setTimeout(function() {
  that.show();
},
that.props.wait);
}

show () {
  this.setState({hidden : ""});
}

  render() { 
    if(this.props.messege == "") return ""
    if(this.props.isfirst === true) {
      return(
        <div class='q-speec-bubble-wrapper'>
          <div class='q speech-bubble'>
            <p>{this.props.messege}</p>
          </div>
        </div>    
       
      ); 
    }
    else {

      return(    
        <div class="a-speec-bubble-wrapper">
          <div class='a speech-bubble'>
           <p>{this.props.messege}</p>
        </div>
       </div>
  ); 
    }
  
    }
  }



const element = < messege/ >;

export default messege;
