import React from 'react'
import CounterContainer from '../containers/CounterContainer'
import SquareContainer from '../containers/SquareContainer'
import Header from '../components/Header'
import { Router, Route, Switch, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/square">Square</Link>
            </li>
          </ul>
        </nav>
      <Container>
        <Header />
        <Switch>
          <Route path="/square" component={SquareContainer} />
          <Route path="/" component={CounterContainer} />
        </Switch>
      </Container>
      </div>
    </Router>
  )
}

export default Routes
