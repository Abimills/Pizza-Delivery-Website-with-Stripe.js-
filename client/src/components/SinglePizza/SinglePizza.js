import axios from "axios";
import React, { useEffect, useState } from "react";
import peel from "../../assets/images/pizzahandle.png";
import gray from "../../assets/images/gray.png";
import blue from "../../assets/images/blue.png";
import { useParams } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
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
        <p className="best-pizza-header">
          Category : {data?.singlePizza?.category}
        </p>
        <div className="size-price-container">
          <p className="price-indiv">Choose your size</p>

          <div className="pizza-size-contain">

            <div className="choose-container">
              <GiFullPizza className="small" />
              <span>Small</span>
            </div>
            <div className="choose-container">
              <GiFullPizza className="medium" />
              <span>Medium</span>
            </div>
            <div className="choose-container">
              <GiFullPizza className="large" />
              <span>Large</span>
            </div>
          </div>
        </div>
        <p className="real-price">
          {"Medium " + ":" + "$" + data?.singlePizza?.price}
        </p>
        <p className="single-pizza-name">{data?.singlePizza?.name}</p>
        <div className="desc-written">
          <p className="desc-header">description</p>
          <p className="single-pizza-description">
            {data?.singlePizza?.description}
          </p>
        </div>
        <div className="number-pizza-container">
                <input type="number" className="number-counter" placeholder="1"/>
        <button className="add-to-cart single-btn">Add to Cart</button>
        </div>
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
