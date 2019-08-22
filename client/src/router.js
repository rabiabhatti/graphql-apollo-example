import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Posts from './components/Posts'
import Login from './components/Login'
import Logout from "./components/Logout";
import AuthHome from './components/AuthHome'
import Register from './components/Register'
import CreatePost from "./components/CreatePost";

function PrivateRoute ({component: Component, token}) {
    return (
        <Route
            render={(props) => token
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
}


const Router = () => {
    const token = localStorage.getItem('token')
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={token ? AuthHome : Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/logout" token={token} component={Logout} />
                <PrivateRoute path="/posts" token={token} component={Posts} />
                <PrivateRoute path="/create-post" token={token} component={CreatePost} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router