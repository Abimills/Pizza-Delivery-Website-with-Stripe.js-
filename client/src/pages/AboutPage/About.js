import "./about.css";
import roller from "../../assets/images/roller-removebg-preview.png";
import chef from "../../assets/images/chef.png";

const About = () => {
  return (
    <div className="about-section">
          <h1 className="chef-header">What Our Top chefs Got To Say ?</h1>
      <div className="about-sub">
        <div className="left-side">
          <div className="chef-container">
            <img src={chef} alt="chef" className="chef" />
            <p className="our-top">
              We have our top shefs , who can make pizza on their sleep
            </p>
          </div>
        </div>
        <div className="center-side">
          <img src={roller} alt="divider" className="divider" />
        </div>
        <div className="right-side">
          <h1>We have a lighting speed delivery system</h1>
          <p> 10 minutes is all we need</p>
        </div>
      </div>
    </div>
  );
};

export default About;
