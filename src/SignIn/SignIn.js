import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends Component {
    static defaultProps = {
        onSigninSuccess: () => { }
    }

    state = { error: null }

    handleSubmitBasicAuth = ev => {
        console.log(`event: `, ev)
        ev.preventDefault()
        const { user_name, password } = ev.target

        TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user_name.value, password.value))

        user_name.value = ''
        password.value = ''
        this.props.onSigninSuccess()
    }

    render() {
        const { error } = this.state
        return (
            <form
                className='SigninForm'
                onSubmit={this.handleSubmitBasicAuth}
            >
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='user_name'>
                    <label htmlFor='SigninForm__user_name'>
                        User name
          </label>
                    <Input
                        required
                        name='user_name'
                        id='SigninForm__user_name'>
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='SigninForm__password'>
                        Password
          </label>
                    <Input
                        required
                        name='password'
                        type='password'
                        id='SigninForm__password'>
                    </Input>
                </div>
                <Button type='submit'>
                    Sign In
        </Button>
            </form>
        )
    }
}
