import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-side-footer">
        <h3 className="never">Never Go hungry</h3>
        <p>we love to see our customers satisfied</p>
      </div>
      <div className="center-footer">

        <p> Designed and Coded by Abel T.</p>
        <p> @copyright claim</p>
      </div>
      <div className="right-side-footer">
        <ul className="navigation-footer">
          <li className="nav-footer">Home</li>
          <li className="nav-footer">About</li>
          <li className="nav-footer">Service</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer