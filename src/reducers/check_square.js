import ActionTypes from '../constants/actionTypes'

const initialState = ''

export default function checkSquare(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_SQUARE:
      return 'X'
    case ActionTypes.DECREMENT_COUNTER:
      return 'O'
    default:
      return state
  }
}
