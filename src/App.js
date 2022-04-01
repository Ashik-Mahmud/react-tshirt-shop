import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Review from './components/Review/Review';
import Shop from "./components/Shop/Shop";
import useCarts from './hooks/useCarts/useCarts';
import useProducts from './hooks/useProducts/useProducts';
export const NewContext = createContext('0')
function App() {
 const [cartCount, setCartCount] = useState(0)
 const [products] = useProducts();
 const [carts, setCarts] = useCarts(products);
 useEffect(()=>{
    setCartCount(JSON.parse(localStorage.getItem("carts"))?.length || '0' )
 }, [])

  return (
    <>
    <NewContext.Provider value={[cartCount, setCartCount, carts, setCarts, products]}>
     <Header  />
     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/home' element={<Home />} />
         <Route path='/shop' element={<Shop />} />
         <Route path='/order' element={<Order />} />
         <Route path='/cart' element={<Cart  />} />
         <Route path='/review' element={<Review />} />
         <Route path='*' element={<NotFound />} />
     </Routes>
     </NewContext.Provider>
    </>
  );
}

export default App;
