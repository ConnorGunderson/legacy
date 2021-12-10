import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Cart } from './views/Cart';
import { Menu } from './views/Menu';
import { Checkout } from './views/Checkout';
import { Order } from './views/Order';

export const App: React.FC = () => (
	<div className="container my-5">
		<div className="row">
			<div className="col-12 col-md-8">
				<Switch>
					<Route exact path="/checkout">
						<Checkout />
					</Route>

					<Route exact path="/order/:id">
						<Order />
					</Route>

					<Route exact path="/">
						<Menu />
					</Route>
				</Switch>
			</div>

			<div className="col-12 col-md-4">
				<Cart />
			</div>
		</div>
	</div>
);
