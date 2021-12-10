import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


import { useCreateOrderMutation } from '../generated';
import { RootState, cartItem } from '../types';

export const Checkout: React.FC = () => {
	const { push } = useHistory();

	const [error, onError] = useState<Error>();
	const [email, setEmail] = useState('');

	const cart = useSelector<RootState, cartItem[]>(({ cart }) => cart);

	const [createOrder] = useCreateOrderMutation({
		onError,
		onCompleted({ createOneOrder: { id } }) {
			push(`/order/${id}`);
		}
	});

	return (
		<>
			<h5>Checkout</h5>

			{error && <div className="alert alert-danger">{error.message}</div>}

			<input
				type="email"
				className="form-control mb-3"
				name="email"
				placeholder="email"
				onChange={e => setEmail(e.target.value)}
				value={email}
			/>

			<div>
				<Link className="btn btn-danger mr-2" to="/">
					Cancel
				</Link>

				<div
					className="btn btn-primary"
					onClick={() => {
						const items = cart.map(cartItem => ({
							price: cartItem.product.price,
							product: {
								connect: {
									id: cartItem.product.id
								}
							}
						}));

						const subtotal = items.reduce(
							(acc, val) => acc + val.price,
							0
						);

						const tax = Math.round(subtotal * 0.06);

						createOrder({
							variables: {
								order: {
									email,
									subtotal,
									tax,
									total: subtotal + tax,
									items: {
										create: items
									}
								}
							}
						});
					}}
				>
					Place Order
				</div>
			</div>
		</>
	);
};
