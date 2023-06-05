import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import Login from './Components/Login/Login';

function App() {
  return (
    <Routes>
      <Route to = '/' element={<Home />} />
      <Route to = '/about' element={<About />} />
      <Route to = '/cart' element={<Cart/>} />
      <Route to = '/product' element={<Product/>} />
      <Route to = '/login' element={<Login/>} />

    </Routes>
  );
}

export default App;
