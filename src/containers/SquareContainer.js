import React from 'react'
import PropTypes from 'prop-types'
import Square from '../components/Square'
import ActionTypes from '../constants/actionTypes'
import { connect } from 'react-redux'

class SquareContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }

  click = () => {
    this.props.dispatch({ type: ActionTypes.INITIAL_SQUARE, id: '1', value: 'X' })
  }

  render() {
    return (
      <Square
        id={this.props.id}
        value={this.props.value}
        click={this.click}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.square.id,
    value: state.square.value,
  }
}

export default connect(mapStateToProps)(SquareContainer)
