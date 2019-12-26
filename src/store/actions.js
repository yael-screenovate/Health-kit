
export const SET_CURRENT = 'SET_CURRENT';
export const ADD_SMS_ITEM = 'ADD_SMS_ITEM';
export const UPDATE_CONTACTS_ORDER = 'UPDATE_CONTACTS_ORDER';
export const CONVERSATION_STATE = 'CONVERSATION_STATE';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';
export const SAVE_SINGLE_SMS = 'SAVE_SINGLE_SMS';
export const DEMO_REPLY = 'DEMO_REPLY';

export const setCurrent = (contact) =>  (dispatch,getState) => {
    console.log("9",contact)
        // this.setState({currentcontact: somedata})
        dispatch({
            type: SET_CURRENT,
            data: contact
      })
      console.log("10", getState())
}

export const updateContactsOrder = (finaNewlarrary) => (dispatch,) => {
    dispatch({
        type: UPDATE_CONTACTS_ORDER,
        data: finaNewlarrary
    })
}      

export const conversationState = (booleanVAlue) => (dispatch,getState) => {
    dispatch({
        type: CONVERSATION_STATE,
        data: booleanVAlue
    })
    console.log("11",booleanVAlue ,getState())
}      

const loadcontacts = (tempcontacts) => (dispatch) => {
    console.log("2", tempcontacts)
    dispatch({
        type: LOAD_CONTACTS,
        data: tempcontacts
  })
} 

export const loadContactsAndConversations = ()  => (dispatch, getState)  => {
    console.log("loadContactsAndConversations")
    let tempcontacts = []
    let tempconversations = {}
    tempcontacts = Object.assign({}, getState().contacts)
    tempconversations = Object.assign({}, getState().conversations)
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
        tempcontacts = data.map((contact) => {
            tempconversations[contact.id]= [{"flag": "", "text": ""}];
            contact.color =  "#"+((1<<24)*Math.random()|0).toString(16);
            return contact;
        });
      // this.setState({contacts : tempcontacts})
      console.log("1", tempcontacts)
      dispatch(loadcontacts(tempcontacts))
      console.log("5", getState())
       //this.setState({conversations : tempconversations})
       dispatch({
        type: LOAD_CONVERSATIONS,
        data: tempconversations
        })
    console.log("7", getState())

})
} 

export const saveSingleSms = (value) => (dispatch,getState) => {
       // this.setState({ userstext: event.target.value });
       console.log("20", value)
       dispatch({
        type: SAVE_SINGLE_SMS,
        data: value
  })
  console.log("22", getState().conversationReducer.userstext)
} 

export const demoReply = () => (dispatch, getState) => {
    let currentMessege = getState().conversationReducer.userstext
    console.log("141", getState().conversationReducer.userstext)   
        //this.props.addsms(true, this.state.userstext)
        dispatch(addSmsItem(true, currentMessege))
        console.log("142", getState().conversationReducer.userstext)   

        // setTimeout((addSmsItem()) , 1500, false ,getState().userstext)
        // setTimeout(dispatch(addSmsItem), 1500,false ,getState().conversationReducer.userstext)
       setTimeout(() => {dispatch(addSmsItem(false ,currentMessege))} , 1500)
       console.log("143", getState().conversationReducer.userstext)   

       //setTimeout(dispatch(addSmsItem()), 1500, false ,getState().conversationReducer.userstext)
       //this.setState({userstext: ""})
        dispatch({
            type: DEMO_REPLY,
      })
      console.log("144", getState().conversationReducer.userstext)   

}

export const addSmsItem = (flag, data) => (dispatch, getState) => {
    console.log("90",flag, data)
    let tempconversations = {}
    tempconversations = Object.assign({}, getState().conversationReducer.conversations)
    tempconversations[getState().contactsReducer.currentcontact.id] =
    tempconversations[getState().contactsReducer.currentcontact.id].concat({"flag": flag, "text" : data})
   // this.setState({conversations: tempconversations})
    dispatch({
    type: ADD_SMS_ITEM,
    data: tempconversations
    })
    if(flag===true)
    {
      let currentcontactIndex = getState().viewReducer.contacts.indexOf(getState().contactsReducer.currentcontact)
      let first = getState().viewReducer.contacts.slice(0,currentcontactIndex)
      let middle = getState().viewReducer.contacts.slice(currentcontactIndex,currentcontactIndex+1)
      let last = getState().viewReducer.contacts.slice(currentcontactIndex+1)
      let finaNewlarrary = [...middle, ...first, ...last]
      currentcontactIndex = getState().contactsReducer.currentcontact.id
      // this.setState({contacts: finaNewlarrary})
      dispatch(updateContactsOrder(finaNewlarrary))
    }
}
