import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import Posts from './components/Posts'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from "./components/CreatePost";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/posts" component={Posts} />
            <Route path="/create-post" component={CreatePost} />
        </Switch>
    </BrowserRouter>
)

export default Router