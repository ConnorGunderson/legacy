import React from 'react';
import { useProductsQuery } from '../generated';
import { Product } from '../Product';




export const Menu: React.FC = () => {
	const { data } = useProductsQuery();

	if (!data) return <div className="spinner" />;

	return (
		<div className="row no-gutters">
			{data.products.map(product => (
				<div className="col-12 col-sm-6" key={product.id}>
					<Product product={product} />
				</div>
			))}
		</div>
	);
};
