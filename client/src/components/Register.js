import React from 'react'
import { Link } from "react-router-dom";

import '../styles/app.css'
import Wrapper from './Wrapper'

export default class Register extends React.Component {
    state = {
        username: '',
        email: '',
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
        const { error, username, email, password, isLoading } = this.state
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <h1 className='register-heading'>Register</h1>
                    <form className='auth-form'>
                        {error && <span className='error-msg'>{error}</span>}
                        <input type="text" name="username" placeholder='Username' className='input' onChange={this.onChange.bind(this)} value={username} />
                        <input type="email" name="email" placeholder='Email' className='input' onChange={this.onChange.bind(this)} value={email} />
                        <input type="password" name="password" placeholder='Password' className='input' onChange={this.onChange.bind(this)} value={password} />
                        <button className='button-dark auth-btn' disabled={isLoading}><Link to="/posts">Register</Link></button>
                    </form>
                </div>
            </Wrapper>
        )
    }
}