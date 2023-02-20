import logo from './logo.svg';
import './App.css';
import Cashier from './Pages/Cashier';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (

    <div className="App">
      {/* {path !== '/' ? : <></>} */}
      <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cashier' element={<Cashier />} />
        </Routes>
   
      <Footer/>

    </div>

  );
}

export default App;
