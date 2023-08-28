import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import "../Cart/cart.css";
import pizza from "../../assets/images/pizza3.jpg";
const Order = () => {
  return (
    <div className="underline">
      <div className="cart-order">
        <img src={pizza} alt="" className="order-img" />
        <div className="size-container">
          <p className="order-name">Margarita</p>
          <p className="size">Medium</p>
        </div>
        <div className="inc-dec-order">
          <button className="dec"> -</button>
          <p>1</p>
          <button className="inc"> +</button>
        </div>
        <p className="price">$8.50</p>
        <IoCloseOutline className='close' />
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Order