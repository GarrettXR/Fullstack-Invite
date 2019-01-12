import { createStore, combineReducers } from 'redux'

import invitesReducer from './reducers/invitesReducer'
// import all reducers here

const rootReducer = combineReducers({
  invitesReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store