import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";

import { RootState, cartItem } from "../types";
// import { Product } from '../generated';
import { formatPrice } from "../formatPrice";
import { useDecrementCartItem, useIncrementCartItem, useRemoveCartItem } from "../useDispatchHooks";

export const Cart: React.FC = () => {
  const cart = useSelector<RootState, cartItem[]>((state) => state.cart);
	const {increment, decrement, remove} = {
		increment: useIncrementCartItem(),
		decrement: useDecrementCartItem(),
		remove: useRemoveCartItem()
	}

  return (
    <div className="card">
      <h5 className="card-header">Cart</h5>

      {cart.length === 0 ? (
        <div className="card-body">
          <p className="card-text">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="list-group list-group-flush">
            {cart.map((item, index) => (
              <div
                className="list-group-item d-flex align-items-center justify-content-between"
                key={index}
              >
                <h6 className="mb-0 font-weight-normal">{item.product.name}</h6>
                <h6 className="mx-2 mb-0">{"X" + item.quantity}</h6>

                <h6 className="mb-0">
                  ${formatPrice(item.product.price * item.quantity)}
                </h6>
                {[increment, decrement].map((f) => (
                  <button
                    className={`btn ml-1 ${
                      f === increment ? "btn-success" : "btn-danger"
                    }`}
                    onClick={() =>
                      f === increment
                        ? increment(index)
                        : decrement(index)
                    }
                  >
										{f === increment ? '+' : '-'}
									</button>
                ))}
								<p onClick={() => remove(index)} className="mb-0 ml-1 text-secondary" style={{cursor: 'pointer'}}>remove</p>
              </div>
            ))}
          </div>

          <Route exact path="/">
            <div className="card-body">
              <Link to="/checkout" className="btn btn-primary btn-block">
                Checkout
              </Link>
            </div>
          </Route>
        </>
      )}
    </div>
  );
};
