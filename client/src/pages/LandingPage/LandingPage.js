import { useEffect, useState } from "react";
import axios from "axios";
import greener from "../../assets/images/greener.png";
import grey from "../../assets/images/red2.png";
import blue2 from "../../assets/images/blue2.png";
import slicer from "../../assets/images/slicer.png";
import paparika from "../../assets/images/paparika.png";
import tomatoe from "../../assets/images/tomatoe.png";
import layered from "../../assets/images/layeredpic.png";
import coca from "../../assets/images/coca.png";
import semi from "../../assets/images/semi2.png";
import pizzaHandle from "../../assets/images/pizzamalet.png";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import "./landing.css";
import Service from "../ServicePage/Service";
import Menu from "../../components/Menu/Menu";
const LandingPage = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Fish");

  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState([]);
  const fetch = async () => {
    const res = await axios.get("http://localhost:4000/api/");
    setData(res?.data);
  };
  const filterData = (data, category) => {
    if (category === "All") {
      setFilteredData(data?.pizzas);
      setActiveCategory("All");
    } else {
      setFilteredData(
        data?.pizzas?.filter(
          (pizza) => pizza?.category.toLowerCase() === category.toLowerCase()
        )
      );
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setCategory([
      "All",
      ...new Set(data?.pizzas?.map((pizza) => pizza.category)),
    ]);
    filterData(data, "Fish");
  }, [data]);
  console.log(filteredData);
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
            {/* <img src={layered} alt="slicer" className="layered" />
            <img src={layered} alt="slicer" className="layered layer2" /> */}
            {/* <img src={grey} alt="grey" className="grey" /> */}
            <img src={blue2} alt="grey" className="bluer" />
          </div>
        </div>
        <Menu />
        <Service />
      </div>
    </main>
  );
};

export default LandingPage;
