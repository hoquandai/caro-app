const initialState = { squares: [], moves: [], asc: true, status: '', xIsNext: true }

export default function caro(state = initialState, action) {
  switch (action.type) {
    case 'JUMP':
      return { ...state, stepNumber: action.stepNumber, xisNext: action.xIsNext }
    default:
      return state
  }
}
