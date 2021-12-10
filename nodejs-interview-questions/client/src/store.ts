import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import logger from "redux-logger";

import { cartItem, RootAction, RootState } from "./types";
import { Cart } from "./views/Cart";

const initialState: RootState = { cart: [] };


const reducer = (state: RootState = initialState, action: RootAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
			const filteredCart = {...state}.cart.filter((e) => e.product.name === action.payload.name)
      if (
        filteredCart.length
      ) {
        /* return an increment of the product rather than duplicating it
         *  within the cart much like 'INCREMENT_CART_ITEM'
         */
        return {
          ...state,
          cart: state.cart.map((cartItem, index) => 
						cartItem.product.name === action.payload.name
							? {...cartItem, quantity: cartItem.quantity + 1}
							: cartItem
					) 
        };
      }
      return {
        ...state,
        cart: [...state.cart, { quantity: 1, product: action.payload }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload),
      };
    case "INCREMENT_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((cartItem, index) =>
					index === action.payload 
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem)
      };
    case "DECREMENT_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((cartItem, index) =>
					index === action.payload 
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem)
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger)
);

export type AppDispatch = typeof store.dispatch;
