import React, { useContext, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "../Cart/cart.css";
import pizza from "../../assets/images/pizza3.jpg";
import axios from "axios";
import { AppContext } from "../Context/Context";
const Order = ({ pizza }) => {
  let { _id, name, price, img } = pizza;
  const { dispatch, cart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const handleDelete = (idToDelete) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: idToDelete });
  };
  const handleCounter = (action) => {
    if (action === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        return 1;
      }
    }
  };
  pizza.quantity = quantity;
  console.log(pizza.quantity);
  return (
    <div className="underline">
      <div className="cart-order">
        <img src={img} alt="" className="order-img" />
        <div className="size-container">
          <p className="order-name">{name}</p>
          <p className="size">Medium</p>
        </div>
        <div className="inc-dec-order">
          <button className="dec" onClick={() => handleCounter("subtract")}>
            -
          </button>
          <p className="count-each">{quantity}</p>
          <button className="inc" onClick={() => handleCounter("add")}>
            +
          </button>
        </div>
        <p className="price">${price}</p>
        <IoCloseOutline className="close" onClick={() => handleDelete(_id)} />
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Order;
