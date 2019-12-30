export const SET_CURRENT = 'SET_CURRENT';
export const ADD_SMS_ITEM = 'ADD_SMS_ITEM';
export const UPDATE_CONTACTS_ORDER = 'UPDATE_CONTACTS_ORDER';
export const CONVERSATION_STATE = 'CONVERSATION_STATE';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';
export const SAVE_SINGLE_SMS = 'SAVE_SINGLE_SMS';
export const DEMO_REPLY = 'DEMO_REPLY';

export const setCurrent = (contact) =>  (dispatch,getState) => {
        // this.setState({currentcontact: somedata})
        dispatch({
            type: SET_CURRENT,
            data: contact
      })
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
}      

const loadcontacts = (tempcontacts) => (dispatch) => {
    dispatch({
        type: LOAD_CONTACTS,
        data: tempcontacts
  })
} 

export const loadContactsAndConversations = ()  => (dispatch, getState)  => {
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
      dispatch(loadcontacts(tempcontacts))
       //this.setState({conversations : tempconversations})
       dispatch({
        type: LOAD_CONVERSATIONS,
        data: tempconversations
        })

})
} 

export const saveSingleSms = (value) => (dispatch,getState) => {
       // this.setState({ userstext: event.target.value });
       dispatch({
        type: SAVE_SINGLE_SMS,
        data: value
  })
} 

export const demoReply = (contactId) => (dispatch, getState) => {
    let currentMessege = getState().conversationReducer.userstext
    //this.props.addsms(true, this.state.userstext)
    if(currentMessege !== "") {
        dispatch(addSmsItem(true, currentMessege,contactId))
        setTimeout(() => {dispatch(addSmsItem(false ,currentMessege, contactId))} , 1500)
        //this.setState({userstext: ""})
         dispatch({
            type: DEMO_REPLY,
           })
        }
    }

export const addSmsItem = (flag, data, contactId) => (dispatch, getState) => {
    console.log(contactId)
    let tempconversations = {}
    tempconversations = Object.assign({}, getState().conversationReducer.conversations)
    tempconversations[contactId] =
    tempconversations[contactId].concat({"flag": flag, "text" : data})
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
