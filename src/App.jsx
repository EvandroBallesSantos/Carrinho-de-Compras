import React from 'react';
import Header from './components/Header/Header.jsx';
import Products from './components/Products/Products.jsx';
import Provider from './context/Provider.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
