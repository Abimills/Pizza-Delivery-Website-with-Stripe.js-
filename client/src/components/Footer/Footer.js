import "./footer.css"
import {SlCallIn} from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-side-footer">
        <h3 className="never">PizzaFam</h3>
        <p>we love to see our customers satisfied</p>
        <ul className="navigation-footer">
          <li className="nav-footer">Home</li>
          <li className="nav-footer">About</li>
          <li className="nav-footer">Service</li>
        </ul>
      </div>
      <div className="center-footer">
        <p> Designed and Coded by Abel T.</p>
        <p> @copyright claim</p>
      </div>
      <div className="right-side-footer">
        <h3>Contact Us</h3>
        <SlCallIn /> <span>+311000-11001</span> <br />
        <IoLocationSharp /> <span>AbelStreet-123 Utrecht Netherlands</span>
      </div>
    </div>
  );
}

export default Footer