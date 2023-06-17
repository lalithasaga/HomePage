import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { CartContext } from './CartContext';

const Header = ({ toggleCart }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <ul className="header">
        <li>
          <NavLink to="/" exact="true" activeClassName="active">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="active">STORE</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
        </li>
        <a href="#cart" className="cart-holder" onClick={toggleCart}>
          cart<span className="cart-number">{cartItems.length}</span>
        </a>
      </ul>
      <h1>The Generics</h1>
    </header>
  );
};

export default Header;














