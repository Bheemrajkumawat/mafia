import React from "react";
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className="body">
      <header>
        <input type="checkbox" id="chk1" />
        <div className="logo">
          <h1>
            <img src="logo/l.png" alt="img" style={{ width: "50%" }} />
          </h1>
        </div>
        <div className="search-box">
          <form action="">
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ride">Ride</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="button">
            <Link to="/login">Login</Link>
          </li>
          <li className="hiden">
            <MdShoppingCart
              style={{ color: "white", width: "20px", height: "20px" }}
              className="none"
            />
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <div className="menu">
          <label htmlFor="chk1">
            <FaBars />
          </label>
        </div>
      </header>
      <div className="text-overlay">
        <h1>WELCOM TO MAFIA CAR RENTAL</h1>
      </div>
    </div>
  );
};

export default Header;
