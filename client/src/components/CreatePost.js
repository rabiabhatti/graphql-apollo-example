import React from 'react'
import { gql } from "apollo-boost"
import { graphql} from 'react-apollo'
import { withRouter } from "react-router-dom"

import '../styles/app.css'
import Wrapper from './Wrapper'

class CreatePost extends React.Component {
    state = {
        title: '',
        description: '',
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePost = async () => {
        const {title, description} = this.state
        this.props.createPostMutation({variables: {input: { title, description }}})
            .then(() =>  {
                this.props.history.replace('/')

            })
            .catch(() => this.setState({ error: 'Something went wrong please try again later' }))
    }

    render() {
        const { description, title } = this.state
        const disable = !title || !description
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <input type="text" name="title" placeholder='Title' className='input' onChange={this.onChange.bind(this)} value={title} />
                    <input type="text" name="description" placeholder='Description' className='input' onChange={this.onChange.bind(this)} value={description} />
                    <button className='button-light auth-btn' disabled={disable} onClick={this.handlePost}>Create</button>
                </div>
            </Wrapper>
        )
    }
}

const CREATE_POST_MUTATION = gql`
    mutation CreatePostMutation($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            description
        }
    }
`

const CreatePostWithMutation = graphql(CREATE_POST_MUTATION, {name: 'createPostMutation'})(CreatePost)
export default withRouter(CreatePostWithMutation)