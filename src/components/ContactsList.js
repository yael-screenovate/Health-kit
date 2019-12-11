import React from 'react';
// import logo, { ReactComponent } from './src/logo.svg';
import  './ContactsList.css';
import  './MessegeInput.js';
import Contact from './Contact.js';
import MessegeInput from './MessegeInput.js';
import { summarizers } from 'istanbul-lib-report';

class ContactsList extends React.Component {
  
    render() {
        return (
            <div className='containers'>
            {this.props.contacts.map((contact) => (
       <Contact contact={contact} key ={contact.id} getCurrent={this.props.setCurrent}
       show={this.props.show}/>
      ))
            }
            </div>
                  );
    }
}

const element = < ContactsList/ >;

export default ContactsList;

