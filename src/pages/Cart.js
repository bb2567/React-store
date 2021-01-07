import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Layout from "Layout";
import axios from "../commons/axios";
import { formatPrice } from "commons/helper";

const Cart = () => {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    axios.get("/carts").then((res) => setCart(res.data));
  },[]);

  const totalPrice = () => {
    const totalPrice = carts
      .map((cart) => cart.mount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return formatPrice(totalPrice) ;
  };

  const updateCart = cart =>{
    const newCarts = [...carts];
    const _index =  newCarts.findIndex(c => c.id === cart.id)
    newCarts.splice(_index,1, cart)
    setCart(newCarts)
  }

  return (
    <Layout>
      <div className="cart-page">
        <span className="cart-title">shopping Cart</span>
        <div className="cart-list">
          {carts.map((cart) => (
            <CartItem key={cart.id} cart={cart} updateCart={updateCart}/>
          ))}
        </div>
        <div className="cart-total">
          Total:
          <span className="total-price">{totalPrice()}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
