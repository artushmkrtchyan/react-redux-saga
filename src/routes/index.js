import React from 'react';
import {Router, Switch, Redirect} from 'react-router-dom';

import Home from '../modules/home';
import {history} from '../helpers';
import {PrivateRoute} from './privateRoute';
import {PublicRoute} from './publicRoute';
import {LoginContainer, RegisterContainer} from '../modules/auth/container'
import NotFound from "../modules/notFound";

class Routes extends React.Component {
    render() {
        return <Router history={history}>
            <Switch>
                <PublicRoute exact path="/" component={Home}/>
                <PublicRoute exact path="/login" component={LoginContainer}/>
                <PublicRoute exact path="/register" component={RegisterContainer}/>
                <PublicRoute path='/404' component={NotFound}/>
                <Redirect from='*' to='/404'/>
            </Switch>
        </Router>;
    }
}

export default Routes;
