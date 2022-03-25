
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes , Route } from 'react-router-dom';
import Products from './component/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route  path="/" element={<Home/>} />

        <Route  path="/products" element={<Products/>} />
      </Routes >


    </>
  );
}

export default App;
