import pizza from "../../assets/images/pizzano.jpg";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import "./landing.css";
const LandingPage = () => {
  return (
    <main className="landing-page-container">
      <div className="land-header">
        <h1>Taste is your head!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio laborum
          tempore iste.
        </p>
      </div>
      <div className="pizza-container">
        <img src={pizza} alt="" />
      </div>
      <div className="pizzaes-container">
        <h1>Choose your type of Pizza</h1>
        <div className="filter-pizza">
          <button className="choose-btn">Vegan</button>
          <button className="choose-btn">Fish</button>
          <button className="choose-btn">Vegetarian</button>
          <button className="choose-btn">Meat</button>
          <button className="choose-btn">Random</button>
          </div>

          <div className="pizza-card-container">
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
