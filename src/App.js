import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Review from './components/Review/Review';
import Shop from "./components/Shop/Shop";
function App() {
 const [cartCount, setCartCount] = useState(0)
  return (
    <>
     <Header cartCount={cartCount} />
     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/home' element={<Home />} />
         <Route path='/shop' element={<Shop setCartCount={setCartCount} />} />
         <Route path='/order' element={<Order />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/review' element={<Review />} />
         <Route path='*' element={<NotFound />} />
     </Routes>
     
    </>
  );
}

export default App;
