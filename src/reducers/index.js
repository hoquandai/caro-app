import { combineReducers } from 'redux'
import counter from './counter'
import square from './square'

const rootReducer = combineReducers({
  counter, square,
})

export default rootReducer
