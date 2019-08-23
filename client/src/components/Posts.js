import React from 'react'
import {gql} from "apollo-boost"
import { Link } from "react-router-dom"
import { useQuery } from '@apollo/react-hooks'

import '../styles/app.css'
import Wrapper from './Wrapper'

export default () => {
    const { loading, error, data } = useQuery(gql`
        {
            viewer {
                name
                posts {
                    id
                    author {
                        name
                    }
                    title
                    description
                }
            }
        }
    `);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <Wrapper>
            <div className='homeWrapper'>
                {data.viewer.posts.map(post => (
                    <div key={post.id}>
                        <p>Title: {post.title}</p>
                        <p>Description: {post.description}</p>
                        <p>Author: {post.author.name}</p>
                    </div>
                ))}
                <button className='button-dark'><Link to="/create-post">Create New</Link></button>
                <button className='button-dark'><Link to="/logout">Logout</Link></button>
            </div>
        </Wrapper>
    )
}