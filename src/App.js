import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import HomePage from './components/HomePage'
import withAuthentication from './components/withAuthentication'
import * as routes from './config/routes'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.LOGIN} component={LoginPage} />
          <Route exact path={routes.REGISTRATION} component={RegistrationPage} />
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App)
