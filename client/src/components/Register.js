import React from 'react'
import { gql } from 'apollo-boost'
import { graphql} from 'react-apollo'
import { withRouter } from "react-router-dom";

import '../styles/app.css'
import Wrapper from './Wrapper'

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: '',
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = async () => {
        const {name, email, password} = this.state
        this.props.registerMutation({variables: {input: { name, email, password }}})
            .then(( res) =>  {
                if (Object.keys(res.data.register).length) {
                    localStorage.setItem('token', res.data.register.token)
                    this.props.history.replace('/posts')
                }
            })
            .catch((err) => console.log('err', err) ||this.setState({ error: 'User with same credentials already exists' }))
    }

    render() {
        const { error, name, email, password } = this.state
        const disable = !email || !password || !name
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <h1 className='register-heading'>Register</h1>
                    <div className='auth-form'>
                        {error && <span className='error-msg'>{error}</span>}
                        <input type="text" name="name" placeholder='Username' className='input' onChange={this.onChange.bind(this)} value={name} />
                        <input type="email" name="email" placeholder='Email' className='input' onChange={this.onChange.bind(this)} value={email} />
                        <input type="password" name="password" placeholder='Password' className='input' onChange={this.onChange.bind(this)} value={password} />
                        <button className='button-dark auth-btn' disabled={disable} onClick={this.handleRegister}>Register</button>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const REGISTER_MUTATION = gql`
    mutation RegisterMutation($input: RegisterInput!) {
        register(input: $input) {
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

const RegisterWithMutation = graphql(REGISTER_MUTATION, {name: 'registerMutation'})(Register)
export default withRouter(RegisterWithMutation)