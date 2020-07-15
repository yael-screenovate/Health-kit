import { combineReducers } from 'redux';
import {viewReducer,contactsReducer,conversationReducer} from './reducers'

export const rootReducer =  combineReducers({
    viewReducer: viewReducer,
    contactsReducer: contactsReducer,
    conversationReducer: conversationReducer
  })

  export default rootReducer
  