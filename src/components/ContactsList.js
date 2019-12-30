import React from 'react';
import  './ContactsList.css';
import  './MessegeInput.js';
import Contact from './Contact.js';
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
})

const element = < ContactsList/ >;

export default connect(mapStateToProps, {})(ContactsList);

