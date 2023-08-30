import axios from "axios";
import React, { useEffect, useState } from "react";
import peel from "../../assets/images/peel.png";
import gray from "../../assets/images/gray.png";
import blue from "../../assets/images/blue.png";
import { useParams } from "react-router-dom";
import "./single.css";
const SinglePizza = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(data);

  const fetch = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/${id}`);
      setData(res.data);
    } catch (error) {
      console.log({
        msg: "error whiling trying to create a singlePizza page",
        error,
      });
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="single-pizza-container">
      <div className="lefter-side">
        <h4 className="best-pizza-header">Pizza Detail</h4>
        <h1 className="single-pizza-name">{data?.singlePizza?.name}</h1>
        <p className="single-pizza-description">
          {data?.singlePizza?.description}
        </p>
        <button className="add-to-cart single-btn">Add to Cart</button>
        <img src={gray} alt="" className="gray" />
      </div>
      <div className="righter-side">
        <img src={`${data?.singlePizza?.img}`} alt="" className="pizza-indiv" />
        <img src={peel} alt="" className="peel" />
        <img src={blue} alt="" className="blue" />
      </div>
    </div>
  );
};

export default SinglePizza;
