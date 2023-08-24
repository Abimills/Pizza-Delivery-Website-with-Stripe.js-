import "./nav.css";

const Navbar = () => {
  return <nav className="navbar-container">
      <ul className="navigation">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
      </ul>
      <div className="logo">
            <h1 className="logo-text">PizzaFam</h1>
            <p>to live is to enjoy</p>
      </div>
      <div className="contact">
            <p> +311000-11001</p>
            <button className="call">Contact Us</button>
      </div>
  </nav>;
};

export default Navbar;
