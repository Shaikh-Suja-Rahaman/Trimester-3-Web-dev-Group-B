import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(true);
  }

  function logout(){
    setIsLoggedIn(false)
  }
    
  

  return (
    <div className="navbar">
      <div className="navbar-logo">Amazon</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <a href="#deals" className="nav-link">
          Today's Deals
        </a>
        <a href="#cart" className="nav-link">
          Cart
        </a>

        {isLoggedin ? (
          <div>Mark</div>
        ) : (
          <button onClick={toggleLogin} className="nav-login-button">
            Sign in
          </button>
        )}

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
