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
    console.log(data.viewer)
    return (
        <Wrapper>
            <div className='homeWrapper'>
                <p>Hello I am posts page</p>
                <button className='button-dark auth-btn'><Link to="/create-post">Create New</Link></button>
            </div>
        </Wrapper>
    )
}