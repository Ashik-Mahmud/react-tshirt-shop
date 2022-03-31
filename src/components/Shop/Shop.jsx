import React, { useState } from "react";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { FiColumns } from "react-icons/fi";
import { GrColumns } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import useProducts from "../../hooks/useProducts/useProducts";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = ({ setCartCount }) => {
  const [products] = useProducts();
  const [grid, setGrid] = useState("");
  const [carts, setCarts] = useState([]);
  const gridTransform = (slug) => {
    setGrid(slug);
  };

  /* handleClick for add to cart */
  const handleAddToCart = (item) => {
    const isHas = carts.find((cart) => cart._id === item._id);
    if (isHas) {
      return toast.error("Already Added this item.");
    } else {
      const newCarts = [...carts, item];
      setCarts(newCarts);
      toast.success("Product Added successfully.");
    }
    setCartCount(carts.length + 1);
  };

  console.log(carts);

  return (
    <section id="shop">
      {" "}
      <ToastContainer />
      <div className="container">
        <div className="title">
          <h3>Shop {carts.length}</h3>
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
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
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
