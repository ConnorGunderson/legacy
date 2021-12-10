import React from 'react';

import { useAddToCart } from './useDispatchHooks';
import { Product as ProductType } from './generated';
import { formatPrice } from './formatPrice';

interface ProductProps {
	product: ProductType;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
	const addToCart = useAddToCart();

	return (
		<div className="d-flex align-items-center">
			<div>
				<h5>{product.name}</h5>

				<h6>${formatPrice(product.price)}</h6>

				<button
					className="btn btn-primary btn-sm"
					onClick={() => addToCart(product)}
				>
					Add to Cart
				</button>
			</div>

			<img
				src={product.image}
				alt={product.name}
				className="img-fluid"
				style={{ maxWidth: 200 }}
			/>
		</div>
	);
};
