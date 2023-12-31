import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import ParentComponent from './Components/ParentComponent';
import Footer from './Components/Footer';
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart';


const productsArr = [
  {
    title: 'Album 1',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Album 4',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div id="EcommerceContainer">
      <ParentComponent />
        <Header toggleCart={toggleCart} />

        <section id="music" className="container">
          <h2>MUSIC</h2>
          <div id="music-content">
            {productsArr.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </section>

        <Footer />

        {isCartOpen && <Cart />}
        
      </div>
    </CartProvider>
  );
};

export default App