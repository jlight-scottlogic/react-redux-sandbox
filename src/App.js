import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import Navbar from './navbar';
import products from './data/products';
import categories from './data/categories';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('products', JSON.stringify(products));
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes></Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
