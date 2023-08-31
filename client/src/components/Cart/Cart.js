import { useContext } from "react";
import Order from "../CartOrder/Order";
import "./cart.css";
import { AppContext } from "../Context/Context";

const Cart = () => {
  const pizzas = JSON.parse(localStorage.getItem("ids"));
  const {pizzaIds} = useContext(AppContext);
  console.log('pizza ids', pizzaIds)
  console.log('pizza ids local', pizzas)
  return (
    <div className="total-container">
      <div className="cart-container">
        <h1 className="cart-header">Shopping Cart</h1>
        <Order />
        <Order />
        <Order />
      </div>
      <div className="total">
        <h3>Thank you for shoping with us</h3>
        <p className="subtotal">
          Subtotal: <span className="total-price">$20.98 </span>{" "}
        </p>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
