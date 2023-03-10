import logo from './logo.svg';
import {React} from 'react'
import Navbars from './component/Navbars';
import Hero from './component/Hero';
import Login from './component/Login';
import Register from './component/Register';
import Forget from './component/Forget';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import './App.css';
import Dashboard from './component/Admin/Dashboard';
import AddProduct from './component/Admin/AddProduct';

function App() {
  return (
    <div>
        <Router>
        <Navbars/>
        <Routes>
          <Route path="/" exact element={<Hero/>}></Route>
          <Route path="/Login" exact element={<Login/>}></Route>
          <Route path="/Register" exact element={<Register/>}></Route>
          <Route path="/Forget" exact element={<Forget/>}></Route>
          <Route path="/Admin/Dashboard" exact element={<Dashboard/>}></Route>
          <Route path="/Admin/Dashboard/AddProduct" exact element={<AddProduct/>}></Route>
        </Routes>
        </Router> 

        </div>
  );
}
export default App;
