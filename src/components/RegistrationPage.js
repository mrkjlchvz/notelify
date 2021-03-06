import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'
import Footnote from './commons/Footnote'
import ErrorMessage from './commons/ErrorMessage'
import Header from './commons/Header'
import { auth } from '../firebase'
import * as routes from '../config/routes'
import { withRouter } from 'react-router-dom'

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
  loading: false
}

class RegistrationPage extends Component {

  constructor (props) {
    super(props)

    this.onFieldChanged = this.onFieldChanged.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = INITIAL_STATE
  }

  onFieldChanged (key, e) {
    this.setState({ [key]: e.target.value })
  }

  onSubmit (e) {
    this.setState({ loading: true, error: null })

    if (this.state.password === this.state.confirmPassword) {
      auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE })
          this.props.history.push(routes.HOME)
        })
        .catch(e => this.setState({ ...INITIAL_STATE, error: e.message }))
    } else {
      // render some error message
      this.setState({ ...INITIAL_STATE, error: "Your passwords do not match." })
    }

    e.preventDefault()
  }
  
  render () {
    const { email, password, confirmPassword, loading } = this.state 

    return (
      <div className="flex justify-center lg:items-center lg:h-screen p-2">
        <div className="w-full max-w-sm">

          <Header title="NOTELIFY" />

          {this.state.error && <ErrorMessage message={this.state.error} />}

          <RegistrationForm
            onFieldChanged={this.onFieldChanged}
            onSubmit={this.onSubmit}
            email={email} 
            password={password} 
            confirmPassword={confirmPassword}
            loading={loading} />

          <Footnote />
        </div>
      </div>
    )
  }

}

export default withRouter(RegistrationPage)
