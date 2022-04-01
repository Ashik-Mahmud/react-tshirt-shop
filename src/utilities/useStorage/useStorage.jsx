import IsStorage from "../isStorage/isStorage";
const setItemIntoLocalStorage = (items) => {
  const cartItems = IsStorage();
  cartItems.push({ id: items?._id, quantity: 1 });
  localStorage.setItem("carts", JSON.stringify(cartItems));
};
export { setItemIntoLocalStorage as setStorage };
