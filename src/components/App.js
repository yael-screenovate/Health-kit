import React from 'react';
// import logo, { ReactComponent } from './src/logo.svg';
import  './App.css';
import ContactsList from './ContactsList.js';
import Contact from './Contact.js';
import Conversation from './Conversation.js';
import { stat } from 'fs';

class App extends React.Component {

  state = {
    contacts: [],
    conversations: {},
    show: false,
    smsstate: "",
    currentcontact: {},
    // messege: "",  
  }

  setCurrent = (somedata) => {
    this.setState({currentcontact: somedata})
  }

  // setmessege = (somedata) => {
  // this.setState({messege: somedata})
  // }
 
   AddItem = (data) => {
     let tempconversations = {}
    tempconversations = Object.assign({}, this.state.conversations)
    tempconversations[this.state.currentcontact.id] = tempconversations[this.state.currentcontact.id].push(data)
    this.setState({conversation: tempconversations})
    }

    show = (booleanVAlue) => {
      this.setState({show: booleanVAlue})
    }
    
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      data.map((contact) => (this.state.conversations[contact.id]= []
       ))
    })
    .catch(console.log)
  }

  render() {
    return (
      <div class='App'>
<ContactsList contacts={this.state.contacts} setCurrent={this.setCurrent}
setobject={this.state.conversations} show={this.show}>
</ContactsList>
<Conversation
currentcontact={this.state.currentcontact} /*setmessege={this.setmessege}*/
/*messege={this.state.messege}*/ conversation={this.state.conversations[this.state.currentcontact.id]}
addsms={this.AddItem} show={this.state.show}>
</Conversation>
      </div>
    );
  }
}

export default App;
