import slicer from "../../assets/images/slicer.png";
import gue from "../../assets/images/gue.png";
import catchup from "../../assets/images/catchup.png";
import coca from "../../assets/images/coca.png";
import semi from "../../assets/images/semi.png";
import pizzaHandle from "../../assets/images/pizzaria.png";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import "./landing.css";
const LandingPage = () => {
  return (
    <main className="mother-container">
      <div className="landing-page-container">
        <div className="landing-container">
          <div className="land-header">
            <div>

            <h1 className="main-header"> <span>D</span>elicious!</h1>
            <h4 className="pizza-word">Pizza</h4>
            </div>
            <p className="pizza-yari">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              laborum tempore iste.
            </p>
            <div className="coca-container">

            <img src={coca} alt="coca"  className="coca"/>
            <button className="discover">Discover for your self</button>
            </div>
          </div>
          <div className="pizza-container">
            <img src={pizzaHandle} alt=""  className="pizza-handle"/>
            
            {/* <button className="try-btn"> Order Now!</button> */}
            <img src={semi} alt="pizza" className="semi-circle" />
            <img src={slicer} alt="slicer" className="slicer" />
            <img src={gue} alt="slicer" className="gue" />
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
