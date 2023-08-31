import "./card.css";
import pizza1 from "../../assets/images/pizza1.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
const PizzaCard = ({ pizza }) => {
  const { _id, name, price, description, img } = pizza;
  const { pizzaIds, setPizzaIds } = useContext(AppContext);
  console.log(pizzaIds);
  const handleAddCart = (id) => {
    setPizzaIds([...pizzaIds, id]);
    localStorage.setItem("ids", JSON.stringify([...pizzaIds, id]));
  };

  return (
    <div className="pizza-card">
      <Link to={`/detail/${_id}`}>
        <img src={img} alt="" className="pizza-img" />
      </Link>
      <div className="description-container">
        <h6 className="pizza-name">{name}</h6>
        <p> ${price}</p>
      </div>
      <p className="description">{description}</p>
      <button className="add-to-cart" onClick={() => handleAddCart(_id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
