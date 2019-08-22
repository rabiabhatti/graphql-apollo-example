import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Posts from './components/Posts'
import Login from './components/Login'
import Logout from "./components/Logout";
import AuthHome from './components/AuthHome'
import Register from './components/Register'
import CreatePost from "./components/CreatePost";

function PrivateRoute ({component: Component, user}) {
    return (
        <Route
            render={(props) => user
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
}


const Router = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={user ? AuthHome : Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/logout" user={user} component={Logout} />
                <PrivateRoute path="/posts" user={user} component={Posts} />
                <PrivateRoute path="/create-post" user={user} component={CreatePost} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router