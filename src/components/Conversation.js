import React from 'react';
// import logo, { ReactComponent } from './logo.svg';
import  './Conversation.css';
import MessegeInput from './MessegeInput.js';
import Contact from './Contact.js';
import Messege from './Messege.js';
import messege from './Messege';



class Conversation extends React.Component {

  state = {
    isfirst: true,
  }

  render() {
     if(!this.props.show) return null;
     return (
        <div class='container'>
            <Contact contact={this.props.currentcontact} /> 
            <div class='conversation'>
            {
            (this.props.conversation ||[]).map((sms) => (
                <Messege messege={sms} isfirst={this.state.isfirst}> </Messege>
              ))
            }
            </div>
            <MessegeInput /*setmessege={this.props.setmessege}*/ addsms={this.props.addsms}/>
        </div>
              ); 
          }
        }
 
const element = <Conversation/ >;

export default Conversation;
