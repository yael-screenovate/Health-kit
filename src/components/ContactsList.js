import React from 'react';
import  './ContactsList.css';
import  './MessegeInput.js';
import Contact from './Contact.js';
import MessegeInput from './MessegeInput.js';
import {connect} from 'react-redux';

class ContactsList extends React.Component {
  
 settext = (id)=> {
     //smsarray={this.props.conversations}
      if(this.props.conversations[id] == undefined ) return ""
      return this.props.conversations[id][this.props.conversations[id].length-1].text    
    }

    render() {
        return (
            <div className='containers'>
            {this.props.contacts.map((contact) => (
       <Contact
       contact={contact}
       //key ={contact.id}
       //show={this.props.show}
       recentsms={this.settext(contact.id)}
       color={contact.color}
       />
      ))
            }
            </div>
                  );
    }
}

const mapStateToProps = state => ({
   contacts: state.viewReducer.contacts,
   conversations: state.conversationReducer.conversations,
  // show: state.viewReducer.show,
  // currentcontact: state.contactsReducer.currentcontact
})
const element = < ContactsList/ >;

export default connect(mapStateToProps, {})(ContactsList);

