import logo from './logo.svg';
import {React} from 'react'
import Navbars from './component/Navbars';
import Hero from './component/Hero';
import Login from './component/Login';
import Register from './component/Register';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
        <Router>
        <Navbars/>
        <Routes>
          <Route path="/" exact element={<Hero/>}></Route>
          <Route path="/Login" exact element={<Login/>}></Route>
          <Route path="/Register" exact element={<Register/>}></Route>
        </Routes>
        </Router> 

        </div>
  );
}
export default App;
