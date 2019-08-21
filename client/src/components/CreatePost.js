import React from 'react'

import '../styles/app.css'
import Wrapper from './Wrapper'

export default class CreatePost extends React.Component {
    state = {
        title: '',
        description: '',
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { description, title } = this.state
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <input type="text" name="title" placeholder='Title' className='input' onChange={this.onChange.bind(this)} value={title} />
                    <input type="password" name="description" placeholder='Description' className='input' onChange={this.onChange.bind(this)} value={description} />
                    <button className='button-light auth-btn'>Create</button>
                </div>
            </Wrapper>
        )
    }
}