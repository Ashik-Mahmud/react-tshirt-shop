import React from "react";
import { FaSearch, FaTshirt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <a className="logo" href="/">
            <FaTshirt />
            tShirt
          </a>
          <div className="search">
            <input type="search" placeholder="Search Your TShirt" />
            <button>
              <FaSearch />
            </button>
          </div>
          <ul>
            {["home", "shop", "order", "review"].map((name, ind) => (
              <MenuLink name={name} key={name + ind} />
            ))}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/cart"
              >
                <MdOutlineShoppingCart />
                <sup className="badge">0</sup>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const MenuLink = ({ name }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={name === "home" ? "/" : "/" + name}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Header;
