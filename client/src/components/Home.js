import React from 'react'
import { Link } from "react-router-dom";

export default () => (
    <div className='homeWrapper'>
        <button className='button-pink'><Link to="/login">Login</Link></button>
        <button className='button-purple'><Link to="/register">Register</Link></button>
    </div>
)