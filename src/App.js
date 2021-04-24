import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/home';
import SignInPage from './pages/sign-in';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/sign-in' component={SignInPage} />
			</Switch>
		</Router>
	);
}

export default App;
