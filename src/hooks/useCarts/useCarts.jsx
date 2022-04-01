import { useEffect, useState } from "react";
import IsStorage from "../../utilities/isStorage/isStorage";

const useCarts = (products) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const cartStorageItems = IsStorage();
    const cartStorageItemsID = cartStorageItems.map((items) => items.id);
    const addedCartItems = products.filter((product) =>
      cartStorageItemsID.includes(product._id)
    );
    setCarts(addedCartItems);
  }, [products]);
  return [carts, setCarts];
};

export default useCarts;
