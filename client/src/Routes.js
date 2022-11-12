import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import PrivateRoute from './utils/PrivateRoute.js';

export default function Routes() {
	return (
		<Switch>
			<PrivateRoute exact path='/' component={Home} />
			<Route exact path='/login' render={() => <Login />} />
			<Route exact path='/register' render={() => <Register />} />
		</Switch>
	);
}
