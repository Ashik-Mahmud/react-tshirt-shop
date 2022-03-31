import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home-text">
            <span>
              Hey you!! wanna buy <span className="colorize">tshirt</span> ?
            </span>
            <h1>
              Best <span className="colorize">T-Shirt</span> Best Collection
              here
            </h1>
            <button onClick={() => navigate("/shop")} className="btn">
              Shop Now <BsCart3 />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
