import { useContext, useEffect, useState } from "react";
import Order from "../Order/Order";
import "./cart.css";
import { AppContext } from "../Context/Context";
import axios from "axios";

const Cart = () => {
  const { cart } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(cart);
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const responses = await Promise.all(
          cart?.pizzaIds?.map((id) =>
            axios.get(`http://localhost:4000/api/${id}`)
          )
        );
        const fetchedData = responses.map((res) => res?.data?.singlePizza);
        setData(fetchedData);
      } catch (error) {
        console.log({
          msg: "error while trying to fetch pizzas depending on cart ids ",
          error,
        });
      }
    };
    fetchPizzas();
  }, [cart]);
  const calculateTotal = () => {
    setTotal(
      data?.reduce((acc, pizza) => acc + pizza?.price * pizza?.quantity, 0)
    );
    console.log(data);
  };

  useEffect(() => {
    calculateTotal();
  }, [data]);
  return (
    <div className="total-container">
      <div className="cart-container">
        <h1 className="cart-header">Shopping Cart</h1>
        {data.length < 1 ? (
          <h1 className="nothing-cart">Your Cart is Empty</h1>
        ) : (
          data?.map((pizza) => {
            return <Order pizza={pizza} key={pizza._id} />;
          })
        )}
      </div>
      <div className="total">
        <h3>Thank you for shoping with us</h3>
        <p className="subtotal">
          Subtotal: <span className="total-price">${total} </span>{" "}
        </p>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
