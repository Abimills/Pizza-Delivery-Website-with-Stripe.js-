import "./card.css";
import pizza1 from "../../assets/images/pizza1.jpg";
const PizzaCard = () => {
  return (
    <div className="pizza-card">
      <img src={pizza1} alt="" className="pizza-img" />
      <div className="description-container">

      <h6 className="pizza-name">Margarita</h6>
      <span> 32cm</span>
      </div>
      <p>description</p>
      <p>$20</p>
    </div>
  );
};

export default PizzaCard;
