import React from 'react';
// import logo, { ReactComponent } from './src/logo.svg';
import  './ContactsList.css';
import  './MessegeInput.js';
import Contact from './Contact.js';
import MessegeInput from './MessegeInput.js';
import { summarizers } from 'istanbul-lib-report';

class ContactsList extends React.Component {
  
 settext = (id)=> {
   //  console.log("this is the text i got:",text)
//access the specfic id each time
    



if(this.props.smsarray[id] == undefined ) return ""
    

    //    console.log("this is true:")
    //    console.log(id)
    //    console.log(this.props.smsarray[id][0].text) 
      return this.props.smsarray[id][this.props.smsarray[id].length-1].text
      //console.log("this is the text i got now:",text)
    
    }

    render() {
    //    let text = this.settext()
      //  console.log("this is the text in render:",text)
        //console.log(this.props.recentsms)
        return (
            <div className='containers'>
            {this.props.contacts.map((contact) => (
       <Contact contact={contact} key ={contact.id} getCurrent={this.props.setCurrent}
       show={this.props.show} recentsms={this.settext(contact.id)} color={contact.color}/>
      ))
            }
            </div>
                  );
    }
}

const element = < ContactsList/ >;

export default ContactsList;

