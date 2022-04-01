import IsStorage from "../isStorage/isStorage";
const setItemIntoLocalStorage = (items) => {
  const cartItems = IsStorage();
  cartItems.push({ id: items?._id, quantity: 1, price: items?.price });
  localStorage.setItem("carts", JSON.stringify(cartItems));
};
export { setItemIntoLocalStorage as setStorage };
