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
    // tempconversations[this.state.currentcontact.id] = tempconversations[this.state.currentcontact.id].push(data)
    tempconversations[this.state.currentcontact.id] =
    tempconversations[this.state.currentcontact.id].concat({"flag": flag, "text" : data})
    this.setState({conversations: tempconversations})

    // tempconversations[this.state.currentcontact.id] =tempconversations[this.state.currentcontact.id].push({"true": data})
    // this.setState({conversatsions: tempconversations})
    // console.log("1",this.state.conversations)
    // tempconversations = Object.assign({}, this.state.conversations)
    // tempconversations[this.state.currentcontact.id] =tempconversations[this.state.currentcontact.id].push({"false": data})
    // this.setState({conversations: tempconversations})
    // // console.log(tempconversations[this.state.currentcontact.id])
    // // console.log(tempconversations)
    // console.log("2",this.state.conversations)
    }

    show = (booleanVAlue) => {
      this.setState({show: booleanVAlue})
    }
    
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      data.map((contact) => (this.state.conversations[contact.id]= [{"flag": "", "text": ""}]
       ))
    })
    //.catch(console.log)
  }

  render() {
   
   
    
    // let smsarraylen =  smsarray.length
    // console.log(smsarraylen)

    return (
      <div class='App'>
<ContactsList contacts={this.state.contacts} setCurrent={this.setCurrent}
show={this.show} smsarray={this.state.conversations}>
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
