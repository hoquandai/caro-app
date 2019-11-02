import React from 'react'
import PropTypes from 'prop-types'
import Board from './Board'
import Square from './Square'
// import styled from '@emotion/styled'

function Caro({ squares, handleClick, status, moves, sort, asc }) {
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol id="moves">{moves}</ol>
      </div>
      <button id="sort" type="button" onClick={() => sort(asc)}>
        {asc}
      </button>
    </div>
  )
}

Caro.propTypes = {
  squares: PropTypes.arrayOf(Square).isRequired,
  handleClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  moves: PropTypes.arrayOf(PropTypes.number).isRequired,
  sort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
}

export default Caro
