import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const changeName = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };

  return (
    <div className="header">
      <div className="img-logo">
        <img
          src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          alt="app"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link className="nav-links" to={'/'}>Home</Link></li>
          <li><Link className="nav-links" to={'/about'}>About Us</Link></li>
          <li><Link className="nav-links" to={'/contact'}>Contact Us</Link></li>
          <li><Link className="nav-links" to={'/cart'}>Cart</Link></li>
          <button className="login-btn" onClick={changeName}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
