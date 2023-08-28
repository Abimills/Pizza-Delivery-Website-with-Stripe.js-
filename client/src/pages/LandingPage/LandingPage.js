import greener from "../../assets/images/greener.png";
import green from "../../assets/images/green.png";
import slicer from "../../assets/images/slicer.png";
import paparika from "../../assets/images/paparika.png";
import tomatoe from "../../assets/images/tomatoe.png";
import layered from "../../assets/images/layeredpic.png";
import pizzafam from "../../assets/images/pizzafam.png";
import coca from "../../assets/images/coca.png";
import semi from "../../assets/images/semi.png";
import pizzaHandle from "../../assets/images/pizzamalet.png";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import "./landing.css";
const LandingPage = () => {
  return (
    <main className="mother-container">
      <div className="landing-page-container">
        <div className="landing-container">
          <div className="land-header">
            <div>
              <div className="paparika-container">
                <img src={paparika} alt="paparika" className="paparika" />
                <img src={tomatoe} alt="tomatoe" className="tomatoe" />
              </div>

              <h1 className="main-header">
                {" "}
                <span>D</span>elicious!
              </h1>
              <h4 className="pizza-word">Pizza</h4>
            </div>
            <p className="pizza-yari">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              laborum tempore iste.
            </p>
            <div className="coca-container">
              <img src={greener} alt="coca" className="greener" />
              <img src={coca} alt="coca" className="coca" />
              <button className="discover">Discover for your self</button>
            </div>
          </div>
          <div className="pizza-container">
            <img src={slicer} alt="slicer" className="slicer" />
            <img src={pizzaHandle} alt="" className="pizza-handle" />
            <img src={semi} alt="pizza" className="semi-circle" />
            <img src={layered} alt="slicer" className="layered" />
          </div>
        </div>
        <div className="all-pizza-container">
          <h1 className="choose-header">Our Menu</h1>
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
          <div className="service-container">
            <h1 className="service-header">Our Services</h1>
            <div className="service-boxes">
              <button className="one">Free delivery</button>
              <button className="two">10 Minute after order</button>
              <button className="three"> Delicious Food</button>
            </div>
            <div className="van-container">

            <img src={green} alt="" className="greene" />
            <img src={pizzafam} alt="" className="pizza-fam" />
            <img src={paparika} alt="" className="collect" />
            <img src={tomatoe} alt="" className="collect come" />
            </div>
            <div className="fam-container">
              <p>Visit Our Resturant</p>
              <h3>PizzaFam</h3>
              <p>enjoy it with every bite</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
