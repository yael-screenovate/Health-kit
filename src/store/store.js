import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import  {initialState} from './reducers'
import rootReducer from './rootreducer'

const middleware = [thunk]
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))
export default store;
