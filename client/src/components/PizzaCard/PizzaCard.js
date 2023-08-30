import "./card.css";
import pizza1 from "../../assets/images/pizza1.jpg";
import { Link } from "react-router-dom";
const PizzaCard = ({ pizza }) => {
  const { name, price, category, description, img } = pizza;

  return (
    <div className="pizza-card">
      <Link to={`/detail/${pizza._id}`}>
        <img src={img} alt="" className="pizza-img" />
      </Link>
      <div className="description-container">
        <h6 className="pizza-name">{name}</h6>
        <p> ${price}</p>
      </div>
      <p className="description">{description}</p>
      <button className="add-to-cart" onClick={() => console.log(pizza._id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
