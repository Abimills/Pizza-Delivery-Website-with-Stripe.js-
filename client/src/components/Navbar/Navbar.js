import "./nav.css";
import leave from "../../assets/images/leave1.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoMdPizza } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navigation">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to={"/menu"} className="link">
          <li className="menu-li">
            Menu <IoMdPizza  className="slice-of-pizza"/>
          </li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to={"/service"} className="link">
          <li>Service</li>
        </Link>
      </ul>
      <div className="logo">
        <h1 className="logo-text">PizzaFam</h1>
        <p>to live is to enjoy</p>
      </div>
      <div className="contact">
        <p> +311000-11001</p>
        <Link to={"/contact"} className="link">
          <button className="call">Contact Us</button>
        </Link>
      </div>
      <Link to={"/cart"}>
        <RiShoppingCart2Fill className="cart" />
      </Link>
      {/* <img src={leave} alt="" className="leave" /> */}
    </nav>
  );
};

export default Navbar;
