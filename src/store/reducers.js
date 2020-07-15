import {SET_CURRENT, ADD_SMS_ITEM, UPDATE_CONTACTS_ORDER, CONVERSATION_STATE
       ,LOAD_CONTACTS ,LOAD_CONVERSATIONS ,SAVE_SINGLE_SMS ,DEMO_REPLY} from './actions';

export const initialState = {
    viewReducer: {
        contacts: [],
        show: false,
    },
    contactsReducer: {
        currentcontact: {},
    },
    conversationReducer: {
        conversations: {},
        userstext: ""
    }
}

export const viewReducer = function(state = initialState.viewReducer, action) {
    switch(action.type) {
        case LOAD_CONTACTS:
            return {
                ...state,
                contacts: action.data
            }
        break;
        case UPDATE_CONTACTS_ORDER:
            return {
                ...state,
                contacts: action.data
                    }
                break;
        case CONVERSATION_STATE:
            return {
                ...state,
                show: action.data
                }
                break;
        default:
                return state;
        }
}

export const contactsReducer = function(currentcontact = initialState.contactsReducer, action) {
    switch(action.type) {
        case SET_CURRENT:
            return {
                ...currentcontact,
                currentcontact: action.data
                }
                break;
        default:
                return currentcontact;
    }
}

export const conversationReducer = function( state = initialState.conversationReducer, action) {
    switch(action.type) {
        case LOAD_CONVERSATIONS:
            return {
                ...state,
                conversations: action.data
                }
                break;
        case ADD_SMS_ITEM:
            return {
                ...state,
                conversations: action.data
            }
                break;
        case SAVE_SINGLE_SMS:
            return {
                ...state,
                userstext: action.data
                    }
                break;
        case DEMO_REPLY:
            return {
                ...state,
                userstext: ""
                    }
                break;
    default:
      return state;
}
}