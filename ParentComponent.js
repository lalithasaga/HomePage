import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Cart from './Cart';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import About from './About';

const ParentComponent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <Router> {/* Wrap the entire component with Router */}
      <div>
        <Header toggleCart={openCart} />

         {/* Use Switch to only render the first matching route */}
          <Route path="/" exact component={ProductList} /> {/* Render ProductList component for the home route */}
          <Route path="/about" component={About} /> {/* Render About component for the about route */}
        

        <button onClick={openCart}>Open Cart</button>
        {isCartOpen && <Cart onClose={closeCart} />}
        <Footer />
      </div>
    </Router>
  );
};

export default ParentComponent;