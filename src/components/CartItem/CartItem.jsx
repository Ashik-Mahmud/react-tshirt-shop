import React, { useEffect, useState } from "react";
import { RiChatDeleteLine } from "react-icons/ri";
import styled from "styled-components";
import {
  handleDecreaseCart,
  handleIncreaseCart,
  ShowQuantity,
  totalCartMoney,
} from "../../utilities/Handle/handleCart";
import "./CartItem.css";
const CartItem = ({ cart, setCartTotal, handleDeleteCartItem }) => {
  const { price, picture, name, gender, _id } = cart;
  const [cartQuantity, setCartQuantity] = useState(1);
  const totalMoneyFromStorage = totalCartMoney();
  useEffect(() => {
    setCartTotal(totalMoneyFromStorage);
  }, [totalMoneyFromStorage, setCartTotal]);

  return (
    <div className="cart-item">
      <Button onClick={() => handleDeleteCartItem(_id)}>
        <RiChatDeleteLine />
      </Button>
      <div className="image">
        <img width={100} height={100} src={picture} alt={name} />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <div className="inner-details">
          <div className="carts-info">
            <span className="colorize">${price * ShowQuantity(_id)}</span>
            <div className="cart-counter">
              <button
                onClick={() => handleDecreaseCart(_id, setCartQuantity, price)}
              >
                -
              </button>
              <input
                type="number"
                readOnly
                value={ShowQuantity(_id) || cartQuantity}
              />
              <button
                onClick={() => handleIncreaseCart(_id, setCartQuantity, price)}
              >
                +
              </button>
            </div>
          </div>
          <span className="colorize">{gender ? gender : "Not Available"}</span>
        </div>
      </div>
    </div>
  );
};

const Button = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0%;
  top: 0%;
  z-index: 1;
  background-color: salmon;
  border: none;
  font-size: 1.1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  border-radius: 0px 0px 0px 10px;
`;

export default CartItem;
