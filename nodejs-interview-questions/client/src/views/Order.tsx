import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { formatPrice } from "../formatPrice";
import { useOrderQuery } from "../generated";
import { format } from "date-fns";

export const Order: React.FC = () => {
  const variables = useParams<{ id: string }>();
  const { data } = useOrderQuery({ variables });

  if (!data) return <>Loading...</>;

  if (!data.order) return <>Order not found</>;

  return (
    <>
      <h1>Order</h1>

      <Link className="btn btn-primary mb-3" to="/">
        Menu
      </Link>

      <div className="list-group">
        <div className="list-group-item">ID: {data.order.id}</div>
        <div className="list-group-item">Email: {data.order.email}</div>
        <div className="list-group-item">
          Subtotal: ${formatPrice(data.order.subtotal)}
        </div>
        <div className="list-group-item">
          Tax: ${formatPrice(data.order.tax)}
        </div>
        <div className="list-group-item">Total: {data.order.total}</div>
        <div className="list-group-item">Created At: {format(new Date(data.order.created), 'Pp') }</div>
      </div>
    </>
  );
};
