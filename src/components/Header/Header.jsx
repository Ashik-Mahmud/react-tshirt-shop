import React, { useContext, useState } from "react";
import { FaSearch, FaTshirt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { NewContext } from "../../App";
import "./Header.css";
const Header = () => {
  const { cartCount, products, setSearchProduct } = useContext(NewContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search) return alert("fil out this field");
    navigate("/shop");
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchProduct(filterProducts);
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <a className="logo" href="/">
            <FaTshirt />
            tShirt
          </a>
          <div className="search">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Your TShirt"
            />
            <button onClick={handleSearch}>
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
                <sup className="badge">{cartCount}</sup>
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
