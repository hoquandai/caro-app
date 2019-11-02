import React from 'react'
import PropTypes from 'prop-types'
import Board from '../components/Board'
import { connect } from 'react-redux'

class BoardContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    size: PropTypes.number,
  }
  static defaultProps = {
    size: 20,
  }

  click = () => {
    this.props.dispatch({})
  }

  render() {
    return (
      <Board
        size={this.props.size}
      />
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    size: state.board.size,
  }
}

export default connect(mapStateToProps)(BoardContainer)
