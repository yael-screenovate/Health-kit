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
    currentcontact: {},
    // messege: "",  
  }

  setCurrent = (somedata) => {
    this.setState({currentcontact: somedata})
  }

  // setmessege = (somedata) => {
  // this.setState({messege: somedata})
  // }
 
   AddItem = (flag, data) => {
    let tempconversations = {}
    tempconversations = Object.assign({}, this.state.conversations)
    tempconversations[this.state.currentcontact.id] =
    tempconversations[this.state.currentcontact.id].concat({"flag": flag, "text" : data})
    this.setState({conversations: tempconversations})
    if(flag===true)
    {
      let currentcontactIndex = this.state.contacts.indexOf(this.state.currentcontact)
      let first = this.state.contacts.slice(0,currentcontactIndex)
      let middle = this.state.contacts.slice(currentcontactIndex,currentcontactIndex+1)
      let last = this.state.contacts.slice(currentcontactIndex+1)
      let finaNewlarrary = [...middle, ...first, ...last]
      currentcontactIndex = this.state.currentcontact.id
       this.setState({contacts: finaNewlarrary})
    }
   
    }

    show = (booleanVAlue) => {
      this.setState({show: booleanVAlue})
    }
    
  componentDidMount() {
    let tempcontacts = []
    let tempconversations = {}
    tempcontacts = Object.assign({}, this.state.contacts)
    tempconversations = Object.assign({}, this.state.conversations)
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      //this.setState({ contacts: data })
    tempcontacts = data.map((contact) => {
        tempconversations[contact.id]= [{"flag": "", "text": ""}];
        contact.color =  "#"+((1<<24)*Math.random()|0).toString(16);
        return contact;
      });
       this.setState({contacts : tempcontacts})
       this.setState({conversations : tempconversations})
    })
  }


  render() {
    return (
      <div class='App'>
<ContactsList contacts={this.state.contacts} setCurrent={this.setCurrent}
show={this.show} smsarray={this.state.conversations} >
</ContactsList>
<Conversation
currentcontact={this.state.currentcontact} 
conversation={this.state.conversations[this.state.currentcontact.id]}
addsms={this.AddItem} show={this.state.show}>
</Conversation>
      </div>
    );
  }
}

export default App;
