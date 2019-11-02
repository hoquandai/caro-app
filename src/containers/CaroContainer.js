import React from 'react'
import PropTypes from 'prop-types'
import Square from '../components/Square'
import Caro from '../components/Caro'
import ActionTypes from '../constants/actionTypes'
import { connect } from 'react-redux'

function calculateWinner(squares, w, h) {
  const lines = [];
  for (let i = 0; i < w * h; i++) {
    const left = [i, i - 1, i - 2, i - 3, i - 4];
    const right = [i, i + 1, i + 2, i + 3, i + 4];
    const top = [i, i - w, i - 2 * w, i - 3 * w, i - 4 * w];
    const bottom = [i, i + w, i + 2 * w, i + 3 * w, i + 4 * w];
    const topLeft = [
      i,
      i - (w + 1),
      i - (w + 1) * 2,
      i - (w + 1) * 3,
      i - (w + 1) * 4
    ];
    const topRight = [
      i,
      i - (w - 1),
      i - (w - 1) * 2,
      i - (w - 1) * 3,
      i - (w - 1) * 4
    ];
    const bottomLeft = [
      i,
      i + (w - 1),
      i + (w - 1) * 2,
      i + (w - 1) * 3,
      i + (w - 1) * 4
    ];
    const bottomRight = [
      i,
      i + (w + 1),
      i + (w + 1) * 2,
      i + (w + 1) * 3,
      i + (w + 1) * 4
    ];

    if (!left.some(value => value < 0 || value > w * h - 1)) {
      const lObs = left[0] - 5;
      const rObs = left[0] + 1;
      if (lObs >= 0 && rObs < w * h) {
        left.push(lObs, rObs);
      }

      lines.push(left);
    }
    if (!right.some(value => value < 0 || value > w * h - 1)) {
      const lObs = right[0] - 1;
      const rObs = right[0] + 5;
      if (lObs >= 0 && rObs < w * h) {
        right.push(lObs, rObs);
      }

      lines.push(right);
    }
    if (!top.some(value => value < 0 || value > w * h - 1)) {
      const tObs = top[0] - 5 * w;
      const bObs = top[0] + w;
      if (tObs >= 0 && bObs < w * h) {
        top.push(tObs, bObs);
      }

      lines.push(top);
    }
    if (!bottom.some(value => value < 0 || value > w * h - 1)) {
      const tObs = bottom[0] - w;
      const bObs = bottom[0] + 5 * w;
      if (tObs >= 0 && bObs < w * h) {
        bottom.push(tObs, bObs);
      }

      lines.push(bottom);
    }
    if (!topLeft.some(value => value < 0 || value > w * h - 1)) {
      const tlObs = topLeft[0] - (w + 1) * 5;
      const brObs = topLeft[0] + (w + 1);
      if (tlObs >= 0 && brObs < w * h) {
        topLeft.push(tlObs, brObs);
      }

      lines.push(topLeft);
    }
    if (!topRight.some(value => value < 0 || value > w * h - 1)) {
      const trObs = topRight[0] - (w - 1) * 5;
      const blObs = topRight[0] + (w - 1);
      if (trObs >= 0 && blObs < w * h) {
        topRight.push(trObs, blObs);
      }

      lines.push(topRight);
    }
    if (!bottomLeft.some(value => value < 0 || value > w * h - 1)) {
      const trObs = bottomLeft[0] - (w - 1);
      const blObs = bottomLeft[0] + (w - 1) * 5;
      if (trObs >= 0 && blObs < w * h) {
        bottomLeft.push(trObs, blObs);
      }

      lines.push(bottomLeft);
    }
    if (!bottomRight.some(value => value < 0 || value > w * h - 1)) {
      const tlObs = bottomRight[0] - (w + 1);
      const brObs = bottomRight[0] + (w + 1) * 5;
      if (tlObs >= 0 && brObs < w * h) {
        bottomRight.push(tlObs, brObs);
      }

      lines.push(bottomRight);
    }
  }
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length === 5) {
      const [a, b, c, d, e] = lines[i];
      const index = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] === squares[d] &&
        squares[a] === squares[e]
      ) {
        for (let j = 0; j < index.length; j++) {
          const val = document.getElementById(`${index[j]}`);
          // val.setAttribute('style[background]', 'blue');
          val.style.background = "blue";
        }
        return squares[a];
      }
    } else if (lines[i].length === 7) {
      const [a, b, c, d, e, f, g] = lines[i];
      const index = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] === squares[d] &&
        squares[a] === squares[e]
      ) {
        if (squares[f] && squares[g] && squares[f] === squares[g]) {
          return null;
        }
        for (let j = 0; j < index.length - 2; j++) {
          const val = document.getElementById(`${index[j]}`);
          // val.setAttribute('style[background]', 'blue');
          val.style.background = "blue";
        }
        return squares[a];
      }
    }
  }
  return null;
}

class CaroContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    squares: PropTypes.arrayOf(Square).isRequired,
    status: PropTypes.string.isRequired,
    moves: PropTypes.arrayOf(PropTypes.number).isRequired,
    asc: PropTypes.bool.isRequired,
    xIsNext: PropTypes.bool.isRequired,
    size: PropTypes.number,
  }

  static defaultProps = {
    size: 20,
  }

  handleClick = () => {
    this.props.dispatch({})
  }

  sort = () => {
    this.props.dispatch({})
  }

  jumpTo = (step) => {
    this.props.dispatch({type: ActionTypes.JUMP, stepNumber: step, xIsNext: step % 2 === 0 })
  }

  findWinner = () => {
    const winner = calculateWinner(this.props.squares, this.props.size, this.props.size)
    let winnerS = ''
    if (winner) {
      winnerS = `Winner is: ${winner}`
    } else {
      winnerS = `Next player is: ${this.props.xIsNext ? 'X' : 'O'}`
    }
    this.props.dispatch({type: ActionTypes.SET_WINNER, state: winnerS})
  }

  render() {
    return (
      <Caro
        squares={this.props.squares}
        handleClick={this.handleClick}
        status={this.props.status}
        moves={this.props.moves}
        sort={this.sort}
        asc={this.props.asc}
        xIsNext={this.props.xIsNext}
      />
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    squares: state.caro.squares,
    moves: state.caro.moves,
    status: state.caro.status,
    asc: state.caro.asc,
    xIsNext: state.caro.xIsNext,
  }
}

export default connect(mapStateToProps)(CaroContainer)
