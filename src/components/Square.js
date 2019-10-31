import React from 'react'
import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

function Square({ click, id, value}) {
  return (
    <button
      id={id}
      type="button"
      className="square"
      onClick={click}>{value}</button>
  )
}

Square.propTypes = {
  click: PropTypes.func,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
}

Square.defaultProps = {
  click: () => {},
  value: null
}

export default Square
