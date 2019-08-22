import React from 'react'
import {gql} from "apollo-boost";
import { graphql} from 'react-apollo'
import { withRouter } from "react-router-dom";

import '../styles/app.css'
import Wrapper from './Wrapper'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async (e) => {
        const {email, password} = this.state
        this.props.loginMutation({variables: {input: { email, password }}})
            .then(( res) =>  {
                if (Object.values(res.data.login).length) {
                    localStorage.setItem('token', res.data.login.token)
                    this.props.history.replace('/posts')
                }
            })
            .catch(() => this.setState({ error: 'Email or password incorrect' }))
    }

    render() {
        const { error, email, password } = this.state
        const disable = !email || !password
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <h1 className='login-heading'>Login</h1>
                    <div className='auth-form'>
                        {error && <span className='error-msg'>{error}</span>}
                        <input type="email" name="email" placeholder='Email' className='input' onChange={this.onChange.bind(this)} value={email} />
                        <input type="password" name="password" placeholder='Password' className='input' onChange={this.onChange.bind(this)} value={password} />
                        <button className='button-light auth-btn' disabled={disable} onClick={this.handleLogin}>Login</button>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const LOGIN_MUTATION = gql`
    mutation LoginMutation($input: LoginInput!) {
        login(input: $input) {
            id
            name
            email
            token
            posts {
                id
                title
                description
            }
        }
    }
`

const LoginWithMutation = graphql(LOGIN_MUTATION, {name: 'loginMutation'})(Login)
export default withRouter(LoginWithMutation)