import React from 'react'
import { Link } from "react-router-dom";

import '../styles/app.css'
import Wrapper from './Wrapper'

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: '',
        isLoading: false
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { error, username, password, isLoading } = this.state
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <h1 className='login-heading'>Login</h1>
                    <form className='auth-form'>
                        {error && <span className='error-msg'>{error}</span>}
                        <input type="text" name="username" placeholder='Username' className='input' onChange={this.onChange.bind(this)} value={username} />
                        <input type="password" name="password" placeholder='Password' className='input' onChange={this.onChange.bind(this)} value={password} />
                        <button className='button-light auth-btn' disabled={isLoading}><Link to="/posts">Login</Link></button>
                    </form>
                </div>
            </Wrapper>
        )
    }
}