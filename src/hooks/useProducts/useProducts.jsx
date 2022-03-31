import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return [products, setProducts];
};

export default useProducts;
