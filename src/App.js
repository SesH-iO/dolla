import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './App.styles';

import Home from './pages/home';
import SignInPage from './pages/sign-in';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Fragment>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/sign-in' component={SignInPage} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
