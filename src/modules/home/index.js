import React, {Component} from 'react';
import Users from '../users/container'

export default class Home extends Component {
    render() {
        return (
            <>
                <div>Home page</div>
                <Users />
            </>
        )
    }
}