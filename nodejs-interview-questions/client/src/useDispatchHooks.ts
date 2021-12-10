import { useDispatch } from 'react-redux';

import { Product } from './generated';
import { AddToCartAction, IncrementCartItemAction, RemoveFromCartAction, cartItem, DecrementCartItemAction } from './types';


// created a generic hook type
export type useGenericHook<T> = () => (product: T) => void;

/**
 * Action creator for the ADD_TO_CART action.
 */
export const useAddToCart: useGenericHook<Product> = () => {
	const dispatch = useDispatch();

	return (product: Product) => {
		const action: AddToCartAction = {
			type: 'ADD_TO_CART',
			payload: product
		};

		dispatch(action);
	};
};

export const useIncrementCartItem: useGenericHook<number> = () => {
	const dispatch = useDispatch();

	return (index: number) => {
		const action: IncrementCartItemAction = {
			type: 'INCREMENT_CART_ITEM',
			payload: index
		};

		dispatch(action);
	};
};

export const useRemoveCartItem: useGenericHook<number> = () => {
	const dispatch = useDispatch();

	return (index: number) => {
		const action: RemoveFromCartAction = {
			type: 'REMOVE_FROM_CART',
			payload: index
		};

		dispatch(action);
	};
};
export const useDecrementCartItem: useGenericHook<number> = () => {
	const dispatch = useDispatch();

	return (index: number) => {
		const action: DecrementCartItemAction = {
			type: 'DECREMENT_CART_ITEM',
			payload: index
		};

		dispatch(action);
	};
};


