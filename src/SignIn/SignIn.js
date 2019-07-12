import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { Button, Input } from '../Utils/Utils';
import AuthApiService from '../../src/services/auth-api-service';

export default class LoginForm extends Component {
    static defaultProps = {
        onSigninSuccess: () => { }
    }

    state = { error: null }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
        console.log(`handlesubmitbasicauth reached past ev.preventDefault`)

        // TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user_name.value, password.value))

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(user => {

                console.log(`got to the then in handleSubmitBasicAuth`);
                user_name.value = ''
                password.value = ''
                this.props.onSigninSuccess()
                this.props.history.push(`/signed-in`)
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

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
                <p>For a demo, use the following log in:</p>
                <p>User name: demo</p>
                <p>Password: Demo123!</p>
            </form>



        )
    }
}
