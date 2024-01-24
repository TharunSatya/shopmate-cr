import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "../assets/logo.png";
import "./Header.css";
export const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      <Link className="logo" to="/">
        <img src={Logo} alt="shopmate logo" className="" />
        <span>Shopping Cart </span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart :{cartList.length}</span>
      </Link>
    </header>
  );
};
