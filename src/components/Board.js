import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
// import styled from '@emotion/styled'

function renderSquare(i) {
  return (
    <Square
      key={i}
      id={`${i}`}
    />
  );
}

function renderSquaresInline(index, size) {
  const items = [];
  for (let i = index * size; i < index * size + size; i += 1) {
    items.push(renderSquare(i));
  }
  return items.map(item => item);
}

function renderTable(size) {
  const table = [];
  for (let i = 0; i < size; i += 1) {
    table.push(
      <div className="board-row" key={i}>
        {renderSquaresInline(i, size)}
      </div>
    );
  }
  return table;
}

function Board({ size }) {
  return (
    <div>
      {renderTable(size)}
    </div>
  )
}

Board.propTypes = {
  size: PropTypes.number,
}

Board.defaultProps = {
  size: 20,
}

export default Board
