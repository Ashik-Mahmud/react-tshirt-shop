import React, { useState } from "react";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { FiColumns } from "react-icons/fi";
import { GrColumns } from "react-icons/gr";
import useProducts from "../../hooks/useProducts/useProducts";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products] = useProducts();
  const [grid, setGrid] = useState("");

  const gridTransform = (slug) => {
    setGrid(slug);
  };

  return (
    <section id="shop">
      <div className="container">
        <div className="title">
          <h3>Shop</h3>
          <div className="grid">
            {["two", "three", "four"].map((col) => (
              <GridLink
                key={col}
                grid={grid}
                gridTransform={gridTransform}
                col={col}
              >
                {col === "two" && <FiColumns />}
                {col === "three" && <BsLayoutThreeColumns />}
                {col === "four" && <GrColumns />}
              </GridLink>
            ))}
          </div>
        </div>
        <div className={`shop-container ${grid}`}>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GridLink = ({ gridTransform, grid, children, col }) => {
  return (
    <span
      className={grid === col ? "active" : ""}
      onClick={() => gridTransform(col)}
    >
      {children}
    </span>
  );
};

export default Shop;
