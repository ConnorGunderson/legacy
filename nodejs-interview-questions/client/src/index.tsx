import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { store } from './store';
import { apollo } from './apollo';

ReactDOM.render(
	<ApolloProvider client={apollo}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
