import React, { useContext, useState } from "react";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { NewContext } from "../../App";
import { deleteItemFromStorage } from "../../utilities/Handle/handleDelete";
import IsStorage from "../../utilities/isStorage/isStorage";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
const Cart = () => {
  const [cartCount, setCartCount, carts, setCarts] = useContext(NewContext);
  const [cartTotal, setCartTotal] = useState(0);

  const totalCartTax = (cartTotal * 6) / 100;
  const grandTotal = cartTotal + totalCartTax + 10;

  const handleDeleteCartItem = (id) => {
    const itemsExceptDeleteItem = carts.filter((cart) => cart._id !== id);
    setCarts(itemsExceptDeleteItem);
    const deleteItem = IsStorage().find((cart) => cart.id === id)?.price;
    setCartTotal((prev) => prev - deleteItem);
    setCartCount(cartCount - 1);

    deleteItemFromStorage(id);
  };

  /* handle clear carts */
  const handleClearCart = () => {
    if (window.confirm("Do you want to clear carts?")) {
      setCarts([]);
      setCartTotal(0);
      setCartCount(0);
      localStorage.removeItem("carts");
    }
  };

  return (
    <section id="cart">
      <div className="container">
        <div className="title">
          <h1>Order Summery</h1>
          <p>you get all the order summery from here</p>
        </div>
        {carts.length > 0 ? (
          <div className="cart-container">
            <div className="cart-items-summery">
              {carts.map((cart) => (
                <CartItem
                  key={cart._id}
                  cart={cart}
                  setCartTotal={setCartTotal}
                  handleDeleteCartItem={handleDeleteCartItem}
                />
              ))}
            </div>
            <div className="cart-items-dashboard">
              <h1>Order Dashboard</h1>
              <Calculation>
                <table>
                  <tbody>
                    <tr>
                      <td>Selected Items</td>
                      <th>{carts?.length}</th>
                    </tr>
                    <tr>
                      <td>Total Money</td>
                      <th>{cartTotal}$</th>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <th>{cartTotal ? "10" : "00"}$</th>
                    </tr>
                    <tr>
                      <td>Tax 6%</td>
                      <th>{totalCartTax}$</th>
                    </tr>
                    <tr>
                      <td>Grand Total</td>
                      <th>{grandTotal}$</th>
                    </tr>
                  </tbody>
                </table>
                <div className="btn-group">
                  <button>
                    Check Out <BsCreditCard2Front />
                  </button>
                  <button onClick={handleClearCart}>
                    Clear Cart <MdOutlineRemoveShoppingCart />
                  </button>
                </div>
              </Calculation>
            </div>
          </div>
        ) : (
          <>
            <CenterDiv>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
                alt="empty-cart"
              />
            </CenterDiv>
          </>
        )}
      </div>
    </section>
  );
};

const CenterDiv = styled.div`
  text-align: center;
`;
const Calculation = styled.div`
  width: 100%;
  margin: 0.5rem 0rem;
  table {
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
    th,
    td {
      padding: 0.4rem;
      border-bottom: 1px solid #e5e5e5;
    }
  }
  .btn-group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    button {
      width: 100%;
      padding: 0.4rem;
      background-color: var(--primary-color);
      font-size: 1rem;
      border: none;
      outline: none;
      color: var(--white-color);
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      gap: 1rem;
      font-family: poppins;
      border-radius: 5px;
      &:last-child {
        background-color: salmon;
      }
    }
  }
`;

export default Cart;
