import React from 'react'
import { Link } from "react-router-dom";

export default () => (
    <div className='homeWrapper'>
        <button className='button-pink'><Link to="/posts">Login Page</Link></button>
    </div>
)