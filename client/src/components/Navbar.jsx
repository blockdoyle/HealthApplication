import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-main">
      <div className="navmain">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        {/* Navigation links */}
        <div className="center-buttons">
          <button className="custom-button">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </button>
          <button className="custom-button">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </button>
          <button className="custom-button">
            <Link to="/exercises/chest" className="nav-link">
              Fitness
            </Link>
          </button>
          <button className="custom-button">
            <Link to="/health" className="nav-link">
              Health
            </Link>
          </button>
          {/* <button className="custom-button">
            <Link to="/store" className="nav-link">
              Store
            </Link>
          </button> */}
        </div>
        <div className="right-buttons">
          <button className="custom-button">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </button>
          {/* <button className="custom-button">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </button> */}
          <button className="custom-button">
            <Link to="/account" className="nav-link">
              <UserOutlined style={{ fontSize: "23px" }} />
              {/* Account */}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
