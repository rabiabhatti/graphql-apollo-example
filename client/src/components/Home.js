import React from 'react'
import { Link } from "react-router-dom";

import Wrapper from './Wrapper'
import '../styles/app.css'

export default () => (
    <Wrapper>
        <div className='homeWrapper'>
            <button className='button-light'><Link to="/login">Login</Link></button>
            <button className='button-dark'><Link to="/register">Register</Link></button>
        </div>
    </Wrapper>
)