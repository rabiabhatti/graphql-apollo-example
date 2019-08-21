import React from 'react'
import { Link } from "react-router-dom";

export default () => (
    <div className='homeWrapper'>
        <p>Hello I am posts page</p>
        <button className='button-dark auth-btn'><Link to="/create-post">Create New</Link></button>
    </div>
)