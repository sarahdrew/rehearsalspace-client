import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../src/services/auth-api-service';
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = event => {
    event.preventDefault()
    const { full_name, user_name, password } = event.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
        this.props.history.push(`/sign-in`)
      })

      .catch(res => {
        this.setState({ error: res.error })
      })


  }

  render() {
    const { error } = this.state
    return (
      <>
        <div className="headline">
          <h3>Register for an account</h3>
        </div>
        <div className="total-registration-form">

          <div className="icon-image">
            <img src={require('../microphone-icon.png')} alt="rehearsalspae logo" />
          </div>
          <form
            className='RegistrationForm'
            onSubmit={this.handleSubmit}
          >

            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <div className='full_name'>
              <label htmlFor='RegistrationForm__full_name'>
                Full name <Required />
              </label>
              <Input
                name='full_name'
                type='text'
                required
                id='RegistrationForm__full_name'>
              </Input>
            </div>
            <div className='user_name'>
              <label htmlFor='RegistrationForm__user_name'>
                User name <Required />
              </label>
              <Input
                name='user_name'
                type='text'
                required
                id='RegistrationForm__user_name'>
              </Input>
            </div>
            <div className='password'>
              <p><i>Password must be at least 8 characters long, contain a special character, one upper case letter and one lower case letter.</i></p>
              <label htmlFor='RegistrationForm__password'>
                Password <Required />
              </label>

              <Input
                name='password'
                type='password'
                required
                id='RegistrationForm__password'>
              </Input>
            </div>
            <Button type='submit'>
              Register
        </Button>
          </form>
        </div>
      </>
    )
  }
}
