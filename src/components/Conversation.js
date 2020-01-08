import React from 'react';
import  './Conversation.css';
import MessegeInput from './MessegeInput.js';
import Contact from './Contact.js';
import Messege from './Messege.js';
import {connect} from 'react-redux';

class Conversation extends React.Component {

  // state = {
  //   isfirst: true,
  // }

  render() {
     if(!this.props.show) return null;
     return (
     
        <div class='container'>
          <div class="currentcontactWrapper">
            <Contact disabled contact={this.props.currentcontact} /> 
          </div>
          <div className='blur'/>
          <div class='conversation'>
            { 
            (this.props.conversations[this.props.currentcontact.id] ||[]).map(sms => (
                <Messege messege={sms.text} isfirst={sms.flag}></Messege>
              ))
            }
            <div id="anchor"></div>
          </div>
          <MessegeInput/>
        </div>
              ); 
          }
        }
 
const element = <Conversation/ >;

const mapStateToProps = state => ({
   conversations: state.conversationReducer.conversations,
   show: state.viewReducer.show,
   currentcontact: state.contactsReducer.currentcontact
})


export default connect(mapStateToProps,{})(Conversation);