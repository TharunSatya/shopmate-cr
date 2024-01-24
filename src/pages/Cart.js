import React from "react";
import { CardCart } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";
export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items:{cartList.length}/${total}
        </h1>
        <ul>
          {cartList.map((eachItem) => (
            <CardCart key={eachItem.id} productList={eachItem} />
          ))}
        </ul>
      </section>
    </main>
  );
};
