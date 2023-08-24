import pizza from "../../assets/images/pizzabg.png";
import pizzaHandle from "../../assets/images/pizzahandle.png";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import "./landing.css";
const LandingPage = () => {
  return (
    <main className="mother-container">
      <div className="landing-page-container">
        <div className="landing-container">
          <div className="land-header">
            <h1 className="main-header">You want another slice!</h1>
            <p className="pizza-yari">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              laborum tempore iste.
            </p>
          </div>
          <div className="pizza-container">
            <img src={pizzaHandle} alt=""  className="pizza-handle"/>
            <button className="try-btn"> Order Now!</button>
            <img src={pizza} alt="pizza" className="pizza-cut" />
          </div>
        </div>
        <div className="all-pizza-container">
          <h1 className="choose-header">Choose your type of Pizza</h1>
          <div className="filter-pizza">
            <button className="choose-btn chosen">All</button>
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
      </div>
    </main>
  );
};

export default LandingPage;
