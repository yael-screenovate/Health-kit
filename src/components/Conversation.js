import React from 'react';
// import logo, { ReactComponent } from './logo.svg';
import  './Conversation.css';
import MessegeInput from './MessegeInput.js';
import Contact from './Contact.js';
import Messege from './Messege.js';
import messege from './Messege';
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
          <Contact contact={this.props.currentcontact} /> 
          </div>
          <div class='conversation'>
            { 
            //conversation={this.props.conversations[this.props.currentcontact.id]}  
            console.log("13",this.props.conversations),
            console.log(this.props.currentcontact.id),
            console.log(this.props.conversations[this.props.currentcontact.id]),
            (this.props.conversations[this.props.currentcontact.id] ||[]).map(sms => (
                <Messege messege={sms.text} isfirst={sms.flag}> </Messege>
              ))
            }
            <div id="anchor"></div>
          </div>
            <MessegeInput /*setmessege={this.props.setmessege} addsms={this.props.addsms}*/
            />
        </div>
              ); 
          }
        }
 
const element = <Conversation/ >;

const mapStateToProps = state => ({
  // contacts: state.viewReducer.contacts,
   conversations: state.conversationReducer.conversations,
   show: state.viewReducer.show,
   currentcontact: state.contactsReducer.currentcontact
})


// export default Conversation;
export default connect(mapStateToProps,{})(Conversation);

