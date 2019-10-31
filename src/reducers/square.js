import ActionTypes from '../constants/actionTypes'

const initialState = { id: '0', value: '0' }

export default function square(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INITIAL_SQUARE:
      return { id: action.id, value: action.value }
    default:
      return state
  }
}
