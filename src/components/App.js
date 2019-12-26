import React from 'react';
import  './App.css';
import ContactsList from './ContactsList.js';
import Contact from './Contact.js';
import Conversation from './Conversation.js';
import {connect} from 'react-redux';
import {loadContactsAndConversations} from '../store/actions'

class App extends React.Component {

  // state = {
  //   contacts: [],
  //   conversations: {},
  //   show: false,
  //   currentcontact: {},
  // }

  // setCurrent = (somedata) => {
  //   this.setState({currentcontact: somedata})
  // }
 
  //  AddItem = (flag, data) => {
  //   let tempconversations = {}
  //   tempconversations = Object.assign({}, this.state.conversations)
  //   tempconversations[this.state.currentcontact.id] =
  //   tempconversations[this.state.currentcontact.id].concat({"flag": flag, "text" : data})
  //   this.setState({conversations: tempconversations})
  //   if(flag===true)
  //   {
  //     let currentcontactIndex = this.state.contacts.indexOf(this.state.currentcontact)
  //     let first = this.state.contacts.slice(0,currentcontactIndex)
  //     let middle = this.state.contacts.slice(currentcontactIndex,currentcontactIndex+1)
  //     let last = this.state.contacts.slice(currentcontactIndex+1)
  //     let finaNewlarrary = [...middle, ...first, ...last]
  //     currentcontactIndex = this.state.currentcontact.id
  //      this.setState({contacts: finaNewlarrary})
  //   }
   
  //   }

    // show = (booleanVAlue) => {
    //   this.setState({show: booleanVAlue})
    // }
    
   componentDidMount() {
     this.props.loadContactsAndConversations();
  //   let tempcontacts = []
  //   let tempconversations = {}
  //   tempcontacts = Object.assign({}, this.state.contacts)
  //   tempconversations = Object.assign({}, this.state.conversations)
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //   tempcontacts = data.map((contact) => {
  //       tempconversations[contact.id]= [{"flag": "", "text": ""}];
  //       contact.color =  "#"+((1<<24)*Math.random()|0).toString(16);
  //       return contact;
  //     });
  //      this.setState({contacts : tempcontacts})
  //      this.setState({conversations : tempconversations})
  //   })
  }

  render() {
    return (
     <div className='App'>
<ContactsList
// contacts={this.props.contacts}
// setCurrent={this.props.setCurrent()}
//show={this.show}
//smsarray={this.props.conversations}
>
</ContactsList>
<Conversation
//currentcontact={this.props.currentcontact} 
// conversation={this.props.conversations[this.props.currentcontact.id]}
// addsms={this.props.addSmsItem}
// show={this.props.show}
>
</Conversation>
      </div>
 
    );
  }
}

// const mapStateToProps = state => ({
//   contacts: state.viewReducer.contacts,
//   conversations: state.conversationReducer.conversations,
//   show: state.viewReducer.show,
//   currentcontact: state.contactsReducer.currentcontact
// })


//export default App;
export default connect(null, {loadContactsAndConversations} )(App);

