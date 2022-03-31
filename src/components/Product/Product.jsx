import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Product.css";
const Product = ({ product }) => {
  const { picture, name, price } = product;
  return (
    <div className="product">
      <div className="image">
        <img src={picture} alt={name} />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <div className="inner-details">
          <span className="colorize">$ {price}</span>
          <button className="btn btn-sm">
            <MdOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
