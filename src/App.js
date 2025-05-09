import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Blogpreview from './Blogpreview';
import Productcatalog from './Productcatalog';
import AboutUs from './AboutUs';
import Signin from './Signin';
import Signup from './Signup';
import Keepintouch from './Keepintouch';
import Shoppingcart from './Shoppingcart';
import './App.css';
import aboutUs from './data/aboutUs.json';
import mainLogo from './images/chuchoFelizLogo.png';


function App() {
  const [shoppingList, setShoppingList] = useState({});
  const [checkOut, setCheckOut] = useState({
    "numberItems": 0,
    "subTotal": 0,
  });

  return (
    // <div>
      <Router>
        <Navigation mainLogo={mainLogo} />
        <Routes>
          <Route exact path='/petshopwebsite' element={<Home />} />
          <Route path='/petshopwebsite/Productcatalog/:productAnimal' element= {
            <Productcatalog 
              shoppingList={shoppingList}
              setShoppingList={setShoppingList} 
              checkOut={checkOut}
              setCheckOut={setCheckOut}
            />} 
          />
          <Route path='/petshopwebsite/AboutUs' element={<AboutUs aboutUs={aboutUs} />} />
          <Route path='/petshopwebsite/Keepintouch' element={<Keepintouch />} />
          <Route path='/petshopwebsite/Signin' element={<Signin />} />
          <Route path='/petshopwebsite/Signup' element={<Signup />} />
          <Route path='/petshopwebsite/Shoppingcart' element={
            <Shoppingcart 
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
              shippingFee= {9.50}
              extraFee={0.08875}
            />} 
          />
          <Route path='/petshopwebsite/Blog/:postID' element={<Blogpreview />} />
        </Routes> 
      </Router>
    // </div>  
  );
}

export default App;