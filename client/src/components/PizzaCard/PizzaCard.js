import "./card.css";
import pizza1 from "../../assets/images/pizza1.jpg";
const PizzaCard = () => {
  return (
    <div className="pizza-card">
      <img src={pizza1} alt="" className="pizza-img" />
      <div className="description-container">

      <h6 className="pizza-name">Margarita</h6>
      <p> $20</p>
      </div>
      <p className="description">This is a margarita pizza with alot of catchup</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default PizzaCard;
