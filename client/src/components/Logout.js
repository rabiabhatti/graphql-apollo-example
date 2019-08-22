import React from 'react'
import { withRouter } from "react-router-dom";

class Logout extends React.Component {
    componentDidMount() {
        localStorage.removeItem('user')
        this.props.history.replace('/')
    }

    render() {
        return <div>Hello</div>
    }
}

export default withRouter(Logout)