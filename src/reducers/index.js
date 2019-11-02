import { combineReducers } from 'redux'
import counter from './counter'
import square from './square'
import board from './board'
import caro from './caro'

const rootReducer = combineReducers({
  counter, square, board, caro
})

export default rootReducer
