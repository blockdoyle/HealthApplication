import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-main">
      <div className="navmain">
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
            <Link to="/fitness" className="nav-link">
              Fitness
            </Link>
          </button>
          <button className="custom-button">
            <Link to="/health" className="nav-link">
              Health
            </Link>
          </button>
          <button className="custom-button">
            <Link to="/store" className="nav-link">
              Store
            </Link>
          </button>
        </div>
        <div className="right-buttons">
          <button className="custom-button">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </button>
          <button className="custom-button">
            <Link to="/account" className="nav-link">
              Account
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
